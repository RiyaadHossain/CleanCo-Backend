import { ObjectId, SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IBooking, IBookingSearch, IBookingStatusPayload } from './interface';
import { Booking } from './modal';
import { bookingSearchableFields } from './constant';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const createAdmin = async (authUserId: ObjectId, payload: IBooking) => {
  payload.orderBy = authUserId;
  const booking = await Booking.create(payload);
  return booking;
};

const getBookings = async (
  paginationOptions: IPaginationOptions,
  filtersOptions: IBookingSearch
) => {
  // Pagination Options
  const { skip, page, limit, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  // Sort condition
  const sortCondition: { [key: string]: SortOrder } = {};
  sortCondition[sortBy] = sortOrder;

  // Filter Options
  const { searchTerm, ...filtersData } = filtersOptions;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: bookingSearchableFields.map(field => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const whereCondition = Object.keys(andConditions).length
    ? { $and: andConditions }
    : {};

  const bookings = await Booking.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit)
    .populate('orderBy service');

  const total = await Booking.find(whereCondition).count();

  const meta = { page, limit, total };

  return { meta, data: bookings };
};

const getBooking = async (id: string) => {
  const booking = await Booking.findById(id);
  return booking;
};

const updateBookingStatus = async (
  id: string,
  payload: IBookingStatusPayload
) => {
  const bookingExist = await Booking.findById(id);
  if (!bookingExist)
    throw new ApiError(httpStatus.NOT_FOUND, 'Booking data not found');

  const booking = await Booking.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return booking;
};

export const BookingService = {
  createAdmin,
  getBookings,
  getBooking,
  updateBookingStatus,
};

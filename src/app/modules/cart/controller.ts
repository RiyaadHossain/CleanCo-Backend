import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { CartService } from './service';
import pick from '../../../shared/pick';
import { cartFilterableFields } from './constant';

const createAdmin: RequestHandler = catchAsync(async (req, res) => {
  const adminData = req.body;
  const authUserId = req.user?._id;
  const result = await CartService.createAdmin(authUserId, adminData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin created successfully',
    data: result,
  });
});

const getCarts: RequestHandler = catchAsync(async (req, res) => {
  const filtersOPtions = pick(req.query, cartFilterableFields);
  const result = await CartService.getCarts(filtersOPtions);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Carts data fetched successfully',
    data: result,
  });
});

const getCartsByServiceId: RequestHandler = catchAsync(async (req, res) => {
  const serviceId = req.params.id;
  const result = await CartService.getCartsByServiceId(serviceId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Carts data fetched successfully',
    data: result,
  });
});

const deleteCart: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await CartService.deleteCart(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin created successfully',
    data: result,
  });
});

export const CartController = {
  createAdmin,
  getCartsByServiceId,
  getCarts,
  deleteCart,
};

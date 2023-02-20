import BaseError from "../../constants/errorMockup.js";
import errorCodes from "../../constants/errorCodes.js";
import statusCodes from "../../constants/statusCodes.js";
import { findOneCctvLocation, createCctvLocation, getAllCctvLocation, createCctvList, findOneCctvList, getAllCctvList, getAllCctvListByLocation } from "./cctv-service.js";
import { CctvListModel, CctvLocationModel } from "./cctv-repository.js";



export const addCctvLocationController = async (req, res) => {
   const { nama_lokasi } = req.body;

   const cctv = await findOneCctvLocation(nama_lokasi);

   if (cctv) throw new BaseError(
      errorCodes.CCTV_LOCAION_IS_ALREADY.code,
      errorCodes.CCTV_LOCAION_IS_ALREADY.message,
      statusCodes.BAD_REQUEST
   );

   await createCctvLocation(req.body);

   return res.status(200).json({
      code: 200,
      status: "OK",
      data: {
         message: "Success Add CCTV Location"
      }
   });
};

export const getAllCctvLocationController = async (req, res) => {
   const cctvLocationArr = await getAllCctvLocation();

   return res.status(200).json({
      code: 200,
      status: "OK",
      data: {
         message: "Success Get All CCTV List",
         cctvLocationArr
      }
   });
}




export const addCctvListController = async (req, res) => {
   const { nama_cctv } = req.body;

   const cctv = await findOneCctvList(nama_cctv);

   if (cctv) throw new BaseError(
      errorCodes.CCTV_LIST_IS_ALREADY.code,
      errorCodes.CCTV_LIST_IS_ALREADY.message,
      statusCodes.BAD_REQUEST
   );

   await createCctvList(req.body);


   return res.status(200).json({
      code: 200,
      status: "OK",
      data: {
         message: "Success Add CCTV List"
      }
   });
};

export const getAllCctvListController = async (req, res) => {
   const lat_location = req.params.lat;
   const lng_location = req.params.lng;
   const thatCctvLocation = await getAllCctvListByLocation(lat_location, lng_location);

   const cctvLocationId = thatCctvLocation.id_cctv_lokasi;

   const cctvList = await getAllCctvList(cctvLocationId);

   return res.status(200).json({
      code: 200,
      status: "OK",
      data: {
         message: "Success Get All CCTV Location",
         cctvList
      }
   });
}
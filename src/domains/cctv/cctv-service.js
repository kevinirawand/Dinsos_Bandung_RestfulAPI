import { CctvLocationModel, CctvListModel } from "./cctv-repository.js";


process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


export const findOneCctvLocation = async (nama_lokasi) => {
   return await CctvLocationModel.findOne({
      where: {
         nama_lokasi: nama_lokasi
      }
   });
}

export const createCctvLocation = async (credentials) => {
   const cctvLokasi = await CctvLocationModel.create(credentials);

   return cctvLokasi;
}

export const getAllCctvLocation = async () => {
   const result = await CctvLocationModel.findAll({
      raw: true,
      nest: true
   });
   return result;
}


export const findOneCctvList = async (nama_cctv) => {
   return await CctvListModel.findOne({
      where: {
         nama_cctv: nama_cctv
      }
   });
}


export const createCctvList = async (credentials) => {

   const cctvLokasi = await CctvListModel.create(credentials);

   return cctvLokasi;
}


export const getAllCctvList = async (id_cctv_lokasi) => {
   const cctvList = await CctvListModel.findAll({
      where: {
         id_cctv_lokasi: id_cctv_lokasi
      }
   });

   return cctvList;
}

export const getAllCctvListByLocation = async (lat, lng) => {
   const cctvLocation = await CctvLocationModel.findOne({
      where: {
         latitude: lat,
         longitude: lng,
      }
   });

   return cctvLocation;
}

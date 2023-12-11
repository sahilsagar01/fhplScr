const insuranceCompany = require('./fhplData/Acko_General_Insurance__FHPL.json');
const fs = require("fs");









function main(companies) {
    const flatArr = companies.flat()
    return Array.from(flatArr, company => {


        const latitudeAndLongdedude = JSON?.stringify(company?.latitude_longitude)?.split(",")
        // function extractAndStorePincode(pincodeString) {
        //     const pincodeMatch = pincodeString?.match(/\b\d{6}\b/);
        //     return pincodeMatch?.[0] ?? ''
            
        //   }
        const lat = (latit) => {
          if(latit === null){
            return null
          }else{
            let splitedLatAndLong = JSON.stringify(latit)?.split(",");
            let latitude = splitedLatAndLong[0];
            return latitude.slice(1, latitude.length)
          }
        }
        const long = (long) => {
          if(long === null){
            return null
          }else{
            let splitedLatAndLong = JSON?.stringify(long)?.split(",")
            let longitud = splitedLatAndLong[1]
            return longitud?.slice(0, longitud.length -1)
          }
        }
        
        
      return {
        tpaname: 'Family Health Plan Insurance TPA Limited.',
        tpaid: 17,
        insurername: "Acko General Insurance Limited.",
        insurerid: company?.insurerId,
        name: company?.name,
        address: company?.address,
        pincode: company?.pincode,
        phone: company?.phone,
        city: company?.city,
        state: company?.state,
        latitude: lat(company.latitude_longitude),
        longitude: long(company.latitude_longitude)
        // latitude: latitudeAndLongdedude[0]?.slice(1, latitudeAndLongdedude[0].length),
        // longitude: latitudeAndLongdedude[1]?.slice(0, latitudeAndLongdedude[0].length - 1),
      };
    });
  }
  fs.writeFileSync("./filltered/Acko_General_Insurance__FHPL.json", JSON.stringify(main(insuranceCompany)));
//   console.log(main(insuranceCompany));
//   filltered
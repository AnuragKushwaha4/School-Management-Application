const db = require("../Configs/schoolDB");
const createHttpError = require("http-errors");



function addSchool(req, res, next) {
  try {

    const { name, address, latitude, longitude } = req.body;

    
    if (!name || !address || latitude === undefined || longitude === undefined) {
      throw createHttpError(400, "All fields are required");
    }

    if (typeof latitude !== "number" || typeof longitude !== "number") {
      throw createHttpError(400, "Latitude and Longitude must be numbers");
    }

    const query = ` INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?) `;

    db.query(query, [name, address, latitude, longitude], (err, result) => {

      if (err) {
        return next(createHttpError(500, "Database insertion failed"));
      }

      res.status(201).json({
        message: "School added successfully",
        schoolId: result.insertId
      });

    });

  } catch (err) {
    return next(err);
  }
}



function listSchools(req, res, next) {
  try {

    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      throw createHttpError(400, "Latitude and longitude are required");
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    if (isNaN(userLat) || isNaN(userLon)) {
      throw createHttpError(400, "Latitude and longitude must be valid numbers");
    }

    const query = "SELECT * FROM schools";

    db.query(query, (err, schools) => {

      if (err) {
        return next(createHttpError(500, "Database query failed"));
      }

      const sortedSchools = schools
        .map((school) => {

          const distance = Math.sqrt(
            Math.pow(userLat - school.latitude, 2) +
            Math.pow(userLon - school.longitude, 2)
          );

          return {
            ...school,
            distance
          };

        })
        .sort((a, b) => a.distance - b.distance);

      res.json(sortedSchools);

    });

  } catch (err) {
    return next(err);
  }
}

module.exports = { addSchool, listSchools };
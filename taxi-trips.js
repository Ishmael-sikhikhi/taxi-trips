module.exports = (pool) => {

    async function totalTripCount() {
        let totalTripForAllTaxi = await pool.query(`select count(taxi_id) as sum from trip
            join taxi on trip.taxi_id = taxi.id
            join routes on trip.route_id = routes.id
        `)

        let total = totalTripForAllTaxi.rows;
            return total[0].sum;
    }
    async function findAllRegions() {
        let regions = await pool.query(`select name from region`);
        regions = regions.rows;
        return regions;
    }
    async function findTaxisForRegion(region) {
        let regionTaxi_s = await pool.query(`select reg_number from taxi
        join region on taxi.region_id = region.id
        where region.name = $1`,[region]);
        regionTaxi_s = regionTaxi_s.rows
        return regionTaxi_s;
    }
    async function findTripsByRegNumber(regNumber) {
       
        let tripByReg = await pool.query(`select count(taxi_id) as trip from trip 
        join taxi on trip.taxi_id = taxi.id
        where taxi.reg_number = $1`,[regNumber]);
        tripByReg = tripByReg.rows[0].trip;
        return Number(tripByReg);
    }
    async function findTripsByRegion(region) {
        let tripByRegion = await pool.query(`select count(taxi_id) as trip from taxi
        join trip on taxi.id = trip.taxi_id
        join region on taxi.region_id = region.id
        where region.name = $1`,[region]);

        tripByRegion = tripByRegion.rows[0].trip;
        return Number(tripByRegion);
    }
    async function findIncomeByRegNumber(regNumber) {
        let incomeByReg = await pool.query(`select sum(amount) as total from trip 
        join routes on trip.route_id = routes.id
        join taxi on trip.taxi_id = taxi.id
        where taxi.reg_number = $1`,[regNumber]);
        incomeByReg = incomeByReg.rows[0].total;
        return incomeByReg;
        
    }
    async function findTotalIncomePerTaxi() {
        let incomePerTaxi = await pool.query(`select sum(amount) from trip 
        join routes on trip.route_id = routes.id
        join taxi on trip.taxi_id = taxi.id`);
        incomePerTaxi = incomePerTaxi.rows
        return incomePerTaxi;        
    }
    async function findTotalIncome() {
        let incomePerTaxi = await pool.query(`select sum(amount) from trip 
        join routes on trip.route_id = routes.id
        join taxi on trip.taxi_id = taxi.id`);
        incomePerTaxi = incomePerTaxi.rows[0].sum
        return incomePerTaxi; 
    }
    async function findTotalIncomeByRegion(region) {
        let incomeByRegion = await pool.query(`select sum(amount) as total from trip 
        join routes on trip.route_id = routes.id
        join taxi on trip.taxi_id = taxi.id
        join region on taxi.region_id = region.id
        where region.name = $1`,[region]);
        incomeByRegion = incomeByRegion.rows[0].total;
        return incomeByRegion;
    }

    return {
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion,
        findIncomeByRegNumber,
        findTotalIncomePerTaxi,
        findTotalIncome,
        findTotalIncomeByRegion
    }
}
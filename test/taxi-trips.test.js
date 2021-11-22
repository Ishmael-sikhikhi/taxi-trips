let assert = require("assert");
let TaxiTrips = require("../taxi-trips");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/taxi_trip_tests';

const pool = new Pool({
    connectionString
});

const taxiTrips = TaxiTrips(pool);

describe('Taxi Trips', function () {

    // beforeEach(async function () {

    // });

    it('should find how many trips all the taxis made', async function () {
        assert.equal(24, await taxiTrips.totalTripCount());

    });

    it('should find all the regions', async function () {
        assert.deepStrictEqual([{ name: 'Durban' }, { name: 'Cape Town' }, { name: 'Gauteng' }], await taxiTrips.findAllRegions());

    });

    it('should find all the taxis for a region', async function () {


        assert.deepStrictEqual([{"reg_number": "DN 92 ZN"},{"reg_number": "GI 12 NC ZN"},{"reg_number": "XA 12 WA ZN"}], await taxiTrips.findTaxisForRegion('Durban'));
        assert.deepStrictEqual([{"reg_number": "CA 123 456"},{"reg_number": "CAA 123 400"},{"reg_number": "CA 270 987"}], await taxiTrips.findTaxisForRegion('Cape Town'));
        assert.deepStrictEqual([{"reg_number": "ND 123 GP"},{"reg_number": "WK 12 DN GP"},{"reg_number": "WAS 123 GP"}], await taxiTrips.findTaxisForRegion('Gauteng'));

    })

    it('should find all the trips for a reg number', async function () {        
        assert.deepStrictEqual(3, await taxiTrips.findTripsByRegNumber('DN 92 ZN'));
        assert.deepStrictEqual(3, await taxiTrips.findTripsByRegNumber('CAA 123 400'));

    });

    it('should find the total number of trips by region', async function () {
       
        assert.deepStrictEqual(9, await taxiTrips.findTripsByRegion('Cape Town'));
        assert.deepStrictEqual(9, await taxiTrips.findTripsByRegion('Gauteng'));
        assert.deepStrictEqual(9, await taxiTrips.findTripsByRegion('Gauteng'));

    });

    it('find the total income for a given reg number', async function () {   
        assert.deepStrictEqual(245, await taxiTrips.findIncomeByRegNumber('GI 12 NC ZN'));
        assert.deepStrictEqual(87.5, await taxiTrips.findIncomeByRegNumber('WK 12 DN GP'));

    });

    it('find the total income for each taxi', async function () {       
      assert.deepStrictEqual([{}, {}, {}], await taxiTrips.findTotalIncomePerTaxi());

    });


    it('find the total income for all the taxis', async function () {

        assert.deepStrictEqual(1144.5, await taxiTrips.findTotalIncome());
    });


    after(function () {
        pool.end();
    });

});
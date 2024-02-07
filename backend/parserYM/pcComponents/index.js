import videocards from './videocards.json' assert { type: 'json' };
import processors from './processors.json' assert { type: 'json' };
import cases from './cases.json' assert { type: 'json' };
import moutherboards from './moutherboards.json' assert { type: 'json' };
import power from './power_supplies.json' assert { type: 'json' };
import ram from './RAM.json' assert { type: 'json' };
import ssd from './SSD.json' assert { type: 'json' };
import hdd from './HDD.json' assert { type: 'json' };
import coolers from './coolers.json' assert { type: 'json' };

const hardwares = {videocards, processors, cases, moutherboards, power, ram, ssd, hdd, coolers};

export default  hardwares;
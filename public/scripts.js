

/*const yearCounts = [{year:949,count:1},{year:1561,count:1},{year:1731,count:1},{year:1736,count:1},{year:1762,count:1},{year:1785,count:1},{year:1801,count:3},{year:1805,count:1},{year:1807,count:1},{year:1812,count:2},{year:1818,count:1},{year:1819,count:1},{year:1823,count:1},{year:1833,count:1},{year:1840,count:1},{year:1844,count:1},{year:1857,count:1},{year:1862,count:2},{year:1865,count:2},{year:1870,count:3},{year:1875,count:8},{year:1876,count:1},{year:1877,count:1},{year:1878,count:2},{year:1879,count:1},{year:1880,count:33},{year:1881,count:4},{year:1882,count:6},{year:1883,count:8},{year:1884,count:13},{year:1885,count:169},{year:1886,count:33},{year:1887,count:75},{year:1888,count:84},{year:1889,count:30},{year:1890,count:509},{year:1891,count:26},{year:1892,count:64},{year:1893,count:80},{year:1894,count:100},{year:1895,count:550},{year:1896,count:117},{year:1897,count:112},{year:1898,count:183},{year:1899,count:80},{year:1900,count:576},{year:1901,count:1081},{year:1902,count:634},{year:1903,count:1110},{year:1904,count:955},{year:1905,count:2750},{year:1906,count:2061},{year:1907,count:2384},{year:1908,count:2994},{year:1909,count:2712},{year:1910,count:5205},{year:1911,count:3885},{year:1912,count:5474},{year:1913,count:3801},{year:1914,count:2956},{year:1915,count:2462},{year:1916,count:1854},{year:1917,count:1260},{year:1918,count:1545},{year:1919,count:2577},{year:1920,count:6890},{year:1921,count:8868},{year:1922,count:14563},{year:1923,count:20569},{year:1924,count:20405},{year:1925,count:18771},{year:1926,count:17557},{year:1927,count:13493},{year:1928,count:12571},{year:1929,count:10078},{year:1930,count:8475},{year:1931,count:5076},{year:1932,count:3300},{year:1933,count:2471},{year:1934,count:2174},{year:1935,count:4365},{year:1936,count:9297},{year:1937,count:11859},{year:1938,count:14708},{year:1939,count:19829},{year:1940,count:24780},{year:1941,count:26131},{year:1942,count:14928},{year:1943,count:6248},{year:1944,count:12670},{year:1945,count:7159},{year:1946,count:15918},{year:1947,count:43779},{year:1948,count:41773},{year:1949,count:39782},{year:1950,count:64949},{year:1951,count:48420},{year:1952,count:45393},{year:1953,count:53811},{year:1954,count:51081},{year:1955,count:58006},{year:1956,count:46326},{year:1957,count:30523},{year:1958,count:21967},{year:1959,count:25188},{year:1960,count:24003},{year:1961,count:22573},{year:1962,count:22153},{year:1963,count:21040},{year:1964,count:22303},{year:1965,count:16870},{year:1966,count:11689},{year:1967,count:8673},{year:1968,count:12517},{year:1969,count:12101},{year:1970,count:9132},{year:1971,count:10158},{year:1972,count:9613},{year:1973,count:9285},{year:1974,count:7437},{year:1975,count:7461},{year:1976,count:11346},{year:1977,count:14173},{year:1978,count:13953},{year:1979,count:12878},{year:1980,count:8684},{year:1981,count:6734},{year:1982,count:3835},{year:1983,count:7373},{year:1984,count:9997},{year:1985,count:11378},{year:1986,count:11674},{year:1987,count:15341},{year:1988,count:15291},{year:1989,count:16771},{year:1990,count:12117},{year:1991,count:7286},{year:1992,count:6388},{year:1993,count:4609},{year:1994,count:4558},{year:1995,count:4994},{year:1996,count:4513},{year:1997,count:5322},{year:1998,count:5309},{year:1999,count:5765},{year:2000,count:5983},{year:2001,count:6565},{year:2002,count:6558},{year:2003,count:7485},{year:2004,count:7791},{year:2005,count:9210},{year:2006,count:8029},{year:2007,count:5712},{year:2008,count:3120},{year:2009,count:1879},{year:2010,count:1863},{year:2011,count:1688},{year:2012,count:1848},{year:2013,count:1457},{year:2014,count:167}];


function findPeaks(yearCounts){
let peaks = [];
for (i=0; i<yearCounts.length;i++)
{
  if (i>0 && i<yearCounts.length-1) {
    if ((yearCounts[i].count > yearCounts[i-1].count) && (yearCounts[i].count > yearCounts[i+1].count )){
      peaks.push(yearCounts[i].year);
    }
  }
}
return peaks;
}

function findValleys(yearCounts){
let valleys = [];
for (i=0; i<yearCounts.length;i++)
{
  if (i>0 && i<yearCounts.length-1) {
    if ((yearCounts[i].count < yearCounts[i-1].count) && (yearCounts[i].count < yearCounts[i+1].count )){
      valleys.push(yearCounts[i].year);
    }
  }
}
return valleys;
}


console.log(findPeaks(yearCounts));
console.log(findValleys(yearCounts));*/
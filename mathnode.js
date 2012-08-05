var st=require("./jstat_ccc");
var nu=require("./numeric");

var log = console.log;

var math = exports;

math.run = function run(exp) {
  log("> "+exp+"\n"+nu.prettyPrint(eval(exp))+"\n");
}

var run = math.run;

nu.largeArray =10000;

run("st.seq(1, 10, 2)");
run("st.Normal(0,1).getQuantile(0.95)");
run("st.pbeta(0.5, 2.3, 4.1)");
run("range=st.seq(-5,5,100)");
run("st.dnorm(range, 0.0, 1.0)");
// produce the plot (no formatting)
// st.plot(range, densities);


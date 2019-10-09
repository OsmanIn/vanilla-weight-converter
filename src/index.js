import "./styles.css";

document.getElementById("container").innerHTML = `
<div class="container">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <h1 class="display-4 text-center mb-3">Weight Converter</h1>
      <form>
        <div class="form-group">
          <input id="kgInput" type="number" class="form-control form-control-lg" placeholder="Enter Kilograms...">
        </div>
      </form>
      <div id="result">
        <div class="card bg-warning mb-2">
          <div class="card-block">
            <h4>Grams:</h4>
            <div id="grResult"></div>
          </div>
        </div>

        <div class="card bg-primary mb-2">
          <div class="card-block">
            <h4>Pounds:</h4>
            <div id="lbsResult"></div>
          </div>
        </div>

        <div class="card bg-danger mb-2">
          <div class="card-block">
            <h4>Ounces:</h4>
            <div id="ozResult"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
document.getElementById("result").style.visibility = "hidden";
document.getElementById("kgInput").addEventListener("input", e => {
  let kgs = e.target.value;
  document.getElementById("result").style.visibility = "visible";
  console.log(kgs);
  document.getElementById("grResult").innerHTML = kgs * 1000 + " " + "gr";
  document.getElementById("lbsResult").innerHTML = kgs * 2.20462 + " " + "lb";
  document.getElementById("ozResult").innerHTML = kgs * 35.274 + " " + "oz";
});

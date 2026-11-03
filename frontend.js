const felsokontener = document.createElement("div");
felsokontener.className = "container-fluid";

const felsorow = document.createElement("div");
felsorow.classname = "row";

const focim = document.createElement("h1");
focim.classname = "c_focim";
focim.textContent = "ÉRD ALSÓ MEGÁLLÓHELY";

const alsokontener1 = document.createElement("div");
alsokontener1.className = "container";

const alsorow1 = document.createElement("div");
alsorow1.classname = "row";

const alsocol1 = document.createElement("div");
alsocol1.classname = "col-sm-4";

const alcim1 = document.createElement("h2");
alcim1.textContent = "Információk a megállóhelyről."
const alszoveg1 = document.createElement("p");
alszoveg1.textContent = "";

felsokontener.append(felsorow, focim);
document.body.append(felsokontener);
alsokontener1.append(alsorow1, alsocol1, alcim1, alszoveg1);
document.body.append(alsokontener1);
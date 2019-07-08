

export class Init {
// ================machine settings init =====================
// ===========================================================


//////////////////////////// zeroMashine /////////////////////

zeroMashine =  { x: 20, y: 20, z: 20 };

//////////////////////////// board ///////////////////////////

boardMesure = {W: 100, L: 5, H: 50};
boardScopeY = {min: 5, max: 200};

//////////////////////////// speed ///////////////////////////

speedWorking = .1;
speedMax = 1;

//////////////////////////// drill ///////////////////////////

drillScopeZ = {min: 5, max: 100};
drillScopeX = {min: 20, max: 200};

//////////////////////////// handles ////////////////////////

boardElement;   // board
drillElement;   // drill
materalElement; // material
toolStoreElement;
// =======================tools =============================
//////////////////////// shift tools ////////////////////////

shiftToolsPosition = {x: 0, y: 100, z: 0};
loadToolPosition = {x: -50, y: 200, z: -50};

/////////////////////// zero tools =========================

// any
dana1: number;
canvasRef: any;
contr: any;
pozX = 0; pozY = 0; pozZ = 0;
public a = false;
public b = false;
public c = 10;
public l1: any;
public toggleSizeCanvas;

}

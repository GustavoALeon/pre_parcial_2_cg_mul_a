// create a scene, that will hold all our elements such as objects, cameras and lights. 
var scene = new THREE.Scene();

function cubo(x, y, z, color, material, alambrado){
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var cubeMaterial;
    switch(material){
     case 'Basic': cubeMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: alambrado});
      break;

     case 'Standard': cubeMaterial = new THREE.MeshStandardMaterial({color: color, wireframe: alambrado});
      break;

     case 'Physical': cubeMaterial = new THREE.MeshPhysicalMaterial({color: color, wireframe: alambrado});
      break;

     case 'Phong': cubeMaterial = new THREE.MeshPhongMaterial({color: color, wireframe: alambrado});
      break;

     case 'Lambert': cubeMaterial = new THREE.MeshLambertMaterial({color: color, wireframe: alambrado});
      break;
    }
    
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

    // add the cube to the scene
    scene.add(cube);
    return(cube);
}

function init() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);    

    // show axes in the screen
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);
      
    light = new THREE.PointLight(0xFFFF00); //  Luz proveniente de un punto en el espacio, semejante al sol.
    light.position.set( -10, 25, 25 );             //  Localización de la luz. (x, y, z).
    scene.add( light ); 

    Cubo = [];   // Definir un array unidimensional
    Cubo1 = [0,1,2];
    
    Axis=["X","Y","Z"];

    var randomCube=Cubo1[Math.floor(Math.random()*(3-0))+0];
    var randomAxis=Axis[Math.floor(Math.random()*Axis.length)];

    dim = 4; 		//Dado que son cubos, todas sus medidas en el eje son iguales, así que use la variable dim para almacenar este valor.
    delta = 8; 		//El número de unidades que el cubo se moverá en el eje respectivo.
    angulo= (Math.PI/2)

    Cubo.push(cubo(dim, dim, dim, 0xFFDD00, 'Physical', false));
    Cubo.push(cubo(dim, dim, dim, 0x00FF33, 'Phong', false));
    Cubo.push(cubo(dim, dim, dim, 0xFF00D3, 'Standard', false));

    var angulo=prompt("Escribe el angulo");
    var angulo1=angulo*(Math.PI/180);

    if(randomAxis=="X")
    {
        if(randomCube==0)
        {
            Cubo[0].rotateX(angulo1);
        }
    }
    if(randomAxis=="Y")
    {
        if(randomCube==0)
        {
            Cubo[0].rotateX(angulo1);
        }        
    }
    if(randomAxis=="Z")
    {
        if(randomCube==0)
        {
            Cubo[0].rotateX(angulo1);
        }        
    }
    if(randomAxis=="X")
    {
        if(randomCube==1)
        {
            Cubo[1].rotateX(angulo1);
        }
    }
    if(randomAxis=="Y")
    {
        if(randomCube==1)
        {
            Cubo[1].rotateX(angulo1);
        }        
    }
    if(randomAxis=="Z")
    {
        if(randomCube==1)
        {
            Cubo[1].rotateX(angulo1);
        }        
    }
    if(randomAxis=="X")
    {
        if(randomCube==2)
        {
            Cubo[2].rotateX(angulo1);
        }
    }
    if(randomAxis=="Y")
    {
        if(randomCube==2)
        {
            Cubo[2].rotateX(angulo1);
        }        
    }
    if(randomAxis=="Z")
    {
        if(randomCube==2)
        {
            Cubo[2].rotateX(angulo1);
        }        
    }
   
 
    Cubo[0].translateX(delta);//En la traslación se debe especificar en qué eje se moverá la figura y la cantidad de unidades a modo de parámetro.
    Cubo[1].translateY(delta);
    Cubo[2].translateZ(delta);

    // position and point the camera to the center of the scene
    camera.position.set(-40, 60, 40);
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);
}
use INMB_business

show collections


db.createCollection
(
    "BoletaPago",
    {
        validator: 
        {
            $jsonSchema:
            {
                bsonType: "object",
                required: ["idBoletaPago","descripcionBoleta", "cantidadDinero", "fechaPago", "TipodePago"],
                properties: 
                {
                    idBoletaPago: 
                    {
                        bsonType: "string",
                        description: "Id de la boleta"
                    },
                    descripcionBoleta: 
                    {
                        bsonType: "string",
                        description: "se describe la boleta"
                    },
                    cantidadDinero:
                    {
                        bsonType: "int",         
                        description: "se ingresa la cantidad de dinero"
                    },
                    fechaPago:
                    {
                        bsonType: "date",          
                        description: "se pone la fecha",   
                    },
                    TipodePago:
                    {            
                        enum: ["Efectivo", "Tarjeta"],       
                        description: "se pone el tipo de pago efectivo o tarjeta"   
                    },
                         
                }
            }
        }
    }
)

db.BoletaPago.insertOne(
    {
        idBoletaPago:"BP001",
        descripcionBoleta: "Se ha realizado el alquiler de un inmueble",
        cantidadDinero: NumberInt(4000),
        fechaPago: new Date('10/03/2021'),
        TipodePago: "Efectivo"
    }
)
db.BoletaPago.insertOne(
    {
        idBoletaPago:"BP002",
        descripcionBoleta: "Se ha realizado el alquiler de un inmueble",
        cantidadDinero: NumberInt(7000),
        fechaPago: new Date('13/07/2022'),
        TipodePago: "Efectivo"
    }
)


db.BoletaPago.find()




db.createCollection
(
    "inquilino",
    {
        validator:
        {
            $jsonSchema:
            {
                bsonType: "object",
                required: ["idInquilino","Inmueble_idInmueble","Nombre","Apellido","NumeroCelular","FechadeIngreso","correoElectronico"],
                properties:
                {
                    idInquilino:
                    {
                        bsonType: "string",
                        description: "Ingresar el ID del inquilino"
                    },
                    Inmueble_idInmueble:
                    {
                        bsonType:"string",
                        description:"Ingresar el ID del inmueble en el cual se aloja"
                    },
                    Nombre:
                    {
                        bsonType:"string",
                        description: "Ingresar el nombre del inquilino"
                    },
                    Apellido:
                    {
                        bsonType:"string",
                        description: "Ingresar el nombre del inquilino"                        
                    },
                    NumeroCelular:
                    {
                        bsonType: "int",
                        description:"Ingresar el apellido del inquilino",
                        minimum: 000000000,
                        maximum: 999999999 
                    },
                    FechadeIngreso:
                    {
                        bsonType: "date",
                        description:"Ingresar Fecha de Ingreso"
                    },
                    correoElectronico:
                    {
                        bsonType: "string",
                        description:"Ingresar el correo electronico"
                    }
                }
            }
        },
    }

)


db.inquilino.insertOne
(
    {
        idInquilino: "A101",
        Inmueble_idInmueble: "PC101",
        Nombre: "Juan",
        Apellido: "Casas",
        NumeroCelular: NumberInt(914223049),
        FechadeIngreso:new Date('11/02/2019'),
        correoElectronico:"juanitoc@hotmail.com"
    }
)

db.inquilino.find({})

db.createCollection
(
    "inmueble",
    {
        validator:
        {
            $jsonSchema:
            {
                bsonType: "object",
                required: ["idInmueble","TipodeInmueble_idTipo","PrecioAlquiler","DescripcionInmueble"],
                properties:
                {
                    idInmueble:
                    {
                        bsonType: "string",
                        description: "Ingresar el ID del inmueble"
                    },
                    TipodeInmueble_idTipo:
                    {
                        bsonType:"string",
                        description:"Ingresar el ID del tipo del inmueble"
                    },
                    PrecioAlquiler:
                    {
                        bsonType:double,
                        minimum: 0,
                        description: "Ingresar el monto del alquiler"
                        
                    },
                    DescripcionInmueble:
                    {
                        bsonType:"string",
                        description: "Ingresar la descripcion del inmueble que se alquila"                        
                    },
                    Usuario_IdUsuario:
                    {
                        bsonType: "string",
                        description:"Ingresar el ID del usuario que dirige el inmueble"
                    }
                }
            }
        },
    
    }

)

db.inmueble.insertOne(
    {
        idInmueble: "PC101",
        TipodeInmueble_idTipo: ["X001"],
        PrecioAlquiler: 1400,
        DescripcionInmueble:"Inmueble en surco",
        Usuario_IdUsuario: "I0000"
    }
)
db.inmueble.insertOne(
    {
        idInmueble: "PC102",
        TipodeInmueble_idTipo: ["X002"],
        PrecioAlquiler: 5400,
        DescripcionInmueble:"Inmueble en Miraflores",
        Usuario_IdUsuario: "I0001"
    }
)

db.inmueble.find()


db.tipoinmueble.insert
(
    [
        {
            _id: "X001",
            descripcion: "Casa con espacios abiertos y una gran iluminacion. Cuenta con 2 pisos y una terraza grande. Patio de grass y una piscina",
            direccion:
                {
                    ciudad: "Lima",
                    calle: "Calle Girasoles",
                    zip: "4412"
                }
        },
        {
            _id: "X002",
            descripcion: "Departamento grande con 3 habitaciones, sala grande y un comedor conectado con la cocina. Bien iluminado",
            direccion:
                {
                    ciudad: "Lima",
                    calle: "Calle Grau",
                    zip: "1215"
                }
        },
        {
            _id: "X003",
            descripcion: "Loft chico y compacto, elegante con espacios abiertos y buena iluminacion",
            direccion:
                {
                    ciudad: "Lima",
                    calle: "Calle Buenaventura",
                    zip: "9940"
                }
        }
    ]
)

db.tipoinmueble.find({})



//CREATE

db.createCollection
(
    "deudaspendientes",
    {
        validator:
        {
            $jsonSchema:
            {
                bsonType: "object",
                required: ["iddeudas","idinquilino","fechavencimiento","montototal","montopenalizacion"],
                properties:
                {
                    iddeudas:
                    {
                        bsonType: "string",
                        description: "Ingresar el ID de la deuda"
                    },
                    idinquilino:
                    {
                        bsonType:"string",
                        description:"Ingresar el ID del inquilino que tiene la deuda"
                    },
                    fechavencimiento:
                    {
                        bsonType:"date",
                        description: "Ingresar la fecha de vencimiento"
                    },
                    montototal:
                    {
                        bsonType:"double",
                        description: "Ingresar el monto total de la deuda"
                    },
                    montopenalizacion:
                    {
                        bsonType: "double",
                        description:"Ingresar el monto de penalizacion"
                    }
                }
            }
        },
        validationAction: "warn"
    }

)

db.deudaspendientes.insert
(
    [
        {
            iddeudas: "D101",
            idinquilino: ["A101"],
            fechavencimiento: new Date('05/02/2022'),
            montototal: 1000,
            montopenalizacion: 14
        }
    ]
)

db.deudaspendientes.find({})



db.createCollection
(
    "contratoarrendatario",
    {
        validator:
        {
            $jsonSchema:
            {
                bsonType: "object",
                required: ["idcontrato","idinquilino","descripcion"],
                properties:
                {
                    idcontrato:
                    {
                        bsonType: "string",
                        description: "Ingresar el ID del contrato"
                    },
                    idinquilino:
                    {
                        bsonType:"string",
                        description:"Ingresar el ID del inquilino que tiene la deuda"
                    },
                    descripcion:
                    {
                        bsonType:"string",
                        description: "Ingresar la descripcion del contrato"
                    }
                }
            }
        },
        validationAction: "warn"
    }

)
db.contratoarrendatario.insertOne
(
    {
        idcontrato:"L01",
        idinquilino:["A101"],
        descripcion:"Contrato anual para el alquiler de una casa"
    }
)

db.createCollection
(
    "RegistroPago",
    {
        validator: 
        {
            $jsonSchema:
            {
                bsonType: "object",
                required: ["idRegistroPago","BoletaPago_idBoletaPago","Inquilino_idInquilino"],
                properties: 
                {
                    idRegistroPago: 
                    {
                        bsonType: "string",
                        description: "id de la coleccion RegistroPago"
                    },
                   BoletaPago_idBoletaPago: 
                    {
                        bsonType: "string",
                        description: "id de la coleccion BoletaPago"
                    },
                    Inquilino_idInquilino: 
                    {
                        bsonType: "string",
                        description: "id de la coleccion Inquilino"
                    },
               
                }
            }
        }
    }
)







db.RegistroPago.insertOne(
        {
            idRegistroPago: "RP001",
            BoletaPago_idBoletaPago: ["BP001"],
            Inquilino_idInquilino: ["A101"]
        }
)

db.RegistroPago.find({})

//READ
db.tipoinmueble.find({_id: "X003"})

//UPDATE

db.tipoinmueble.update({_id: "X003"}, {$set: { descripcion: "Departamento con piscina compartida" }})

//Remove

db.tipoinmueble.remove({_id: "X002"})
db.BoletaPago.remove({idBoletaPago:"BP001"})


//CONSULTAS

db.BoletaPago.aggregate([{$match:{}}, {$group: {_id:{Tipo:"$TipodePago"}, total: {$sum:"$cantidadDinero"}}}])

db.inmueble.aggregate([{$match:{}}, {$group: {_id:{Descripcion: "Inmueble en Miraflores"}, Maximo :{$max:"$PrecioAlquiler"}}}])

db.BoletaPago.aggregate([{$match:{}}, {$group: {_id:{Fecha:"$fechaPago"}, total: {$min:"$cantidadDinero"}}}])

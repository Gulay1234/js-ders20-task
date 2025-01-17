let obj = {
    name: "Ferid",
    surname: "Ceferov",
    age: 32,
    country: "Azerbaijan",
    job: "Programmer"
    }

    let a = document.getElementById("name");
    a.value = `Name: ${obj.name}`; 

    let b = document.getElementById("surname");
    b.value = `Surname: ${obj.surname}`;

    let c = document.getElementById("age");
    c.value = `Age: ${obj.age}`;

    let d = document.getElementById("country");
    d.value = `Country: ${obj.country}`;

    let e = document.getElementById("job");
    e.value = `Job: ${obj.job}`;

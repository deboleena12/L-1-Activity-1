var choice = prompt("Welcome to Perimeter Calculator. \n Please enter your Choice. \n1.Perimeter of Rectangle. \n2.Perimeter of Triangle. \n3.Perimeter of Circle. \n4.Perimeter of Parallelogram");

if (choice == '1') {
    var t = 2
    var l = prompt('Enter the Length')
    var b = prompt('Enter the breadth')
    var result = Number(t) * Number(l) * Number(b)
    alert('The Area is ' + result)
}

if (choice == '2') {
    var p = prompt('Enter the other side')
    var h = prompt('Enter the height')
    var b = prompt('Enter the base')
    var result = Number(h) + Number(b) + Number(p)
    alert('The Area is ' + result)
}
if (choice == '3') {
    var d = 2
    var p = 3.14159
    var r = prompt('Enter the radius')
    var result = 3.14159 * Number(r) * Number(d)
    alert('THe Area is ' + result)
}

if (choice == '4') {
    var t = 2
    var h = prompt('Enter the height')
    var cb = prompt('Enter the corresponding base')
    var result = Number(t) * Number(h) + Number(cb)
    alert('The Area is ' + result)
}
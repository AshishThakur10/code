<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p>The concat() method concatenates (joins) two or more arrays.</p>

<p id="demo"></p>

<script>
const hege = ["Cecilie", "Lone"];
const stale = ["Emil", "Tobias", "Linus"];

const children = hege.concat(stale); 
document.getElementById("demo").innerHTML = children;
</script>

</body>
</html>

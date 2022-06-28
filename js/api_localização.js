<html>
<body>
<script>
if ('geolocation' in navigator) {
navigator.geolocation.getCurrentPosition(function(position){
console.log(position)
}, function(error){
	console.log(error)
	})
}else{
alert('loclização não pode ser encontrada')
}
</script>
</body>
</html>

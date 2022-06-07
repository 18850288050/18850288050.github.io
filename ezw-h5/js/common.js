function formatDateTime(time){
	if(time){
		var dateTime=new Date(time)
		var year= dateTime.getFullYear()
		var month = fixZero(dateTime.getMonth()+1)
		var date = fixZero(dateTime.getDate())
		var hour = fixZero(dateTime.getHours())
		var minutes = fixZero(dateTime.getMinutes())
		var seconds = fixZero(dateTime.getSeconds())
		return year+'-'+month+'-'+date+' '+hour+':'+minutes+':'+seconds
	}
	return time
}

function fixZero(num){
	if(num<10){
		return '0'+num
	}
	return num
}
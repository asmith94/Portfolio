$.ajax({ url:'https://spreadsheets.google.com/feeds/list/1HY3tz_1B-5GHfX_9yDpdpdgEzPVQX5Ub1J_F2cyOSF8/od6/public/values?alt=json' })
.then(data => console.log(data) )
.catch((err) => console.log('err -', err));
'use strict'

// export default function module3 () {
//   const sy = window.scrollY
//   console.log(sy)
// }

export default function module3 () {

// const stragePrefSp = () => {
  function getCookie() {
    // const arr = []
    // if (document.cookie !== '') {
    const kentaro = "a=1; b=2; c=3; smartphone=setpref%3D01%26_from%3Dr%26lastpref%3D01; e=5;"
      // const tmp = document.cookie.split('; ')
      const tmp = kentaro.split('; ')
      // console.log(tmp)

      // [
      //   "__lt__cid=4e1e373d-ecf2-4bca-b741-fcd9be9487c5",
      //   "__adroll_fpc=ee42714cd0931452f2c68351d238e1e7-s2-1577259608016",
      //   "GU=3ff10c435de51596306cbd265671e96b",
      //   "gt=GT10379d0fd005ac1e4a5b967_oHFntqj7m4MJ9CJJxwsZ",
      //   "_ra=1578302444457|04a4b2db-c8d3-4773-b04d-055882f82b5d",
      //   "_ga=GA1.3.860093958.1578302444",
      //   "optimizelyEndUserId=oeu1578302446542r0.7328528566655654",
      //   "_fbp=fb.2.1578374050472.349446236",
      //   "_ud2=af9db19af2874a99b0f4d68ae1497e70",
      //   "cto_bundle=1TJ0v19PU1VyVmtkdUY1eFR5Z05jVFYydmVWdXF…NCSVhTbkQ2aWtpaDdYaHlsQVlRc0t4Y3B4eW5lWmZYTUklM0Q",
      //   "smartphone=setpref%3D01%26_from%3Dr%26lastpref%3D01",
      //   "__gads=ID=8ae54ad34ede1cf0:T=1578530782:S=ALNI_MZ_8F-tJM0ib0tDkFWTb7zG86dIeA",
      //   "tgUser=031039ed65f001ac1e5221a2xLdTNhfFZ4NUXg094Amg1m",
      //   "tgcom=%7B%22login_type%22%3A1%2C%22guser_type%22%3A0%7D",
      //   "GHistory=b824605%3A110%3A1578633837%2Cgdfb102%3A110%3A1578552819%2Cp222100%3A110%3A1578382333",
      //   "_gid=GA1.3.1374695676.1578966027",
      //   "gUser=03103ec1336000ac1e4aee85sW2DFLvkEYMEvrdUJRw0kw",
      //   "gopen_r=1",
      //   "gcom=%7B%22login_type%22%3A1%2C%22guser_type%22%3A1%7D",
      //   "_td=8ef8df44-90bf-4917-8d51-a3536f1534d5",
      //   "ds=f0bd121d4f89015623a882ce7794f8b4c4e51ece59a8d15e5fe053b6586a47cb",
      //   "__cribnotes_prm=__t_1579138938053_%7B%22uuid%22%3A%22585c5671-698a-4d84-840f-dace2224813a%22%7D",
      //   "__ar_v4=DADCIGE4PNCV3LOQAHKMGN%3A20200024%3A17%7CQ…024%3A17%7CYW7OCV6YKFC4JNRV6DNDXK%3A20200024%3A17"
      // ]

      console.log(tmp)
      const result = tmp.map(function( value ) {
        const ken = value.split('=')
        const rObj = {}
        rObj[ken[0]] = ken[1]
        return rObj
        // return ken
    });
    console.log(result)

    const k = result.map(user => {
      if(user.smartphone) {
        return true
      }
      return false

    })
    console.log(k)


    // const kk = tmp.reduce(function(accumulator, currentValue) {
    //   return `
    //   accumulator = ${accumulator}
    //   currentValue = ${currentValue}
    //   `
    // },1);
    //   console.log(kk)

      // for (let i = 0; i < tmp.length; i++) {
      //   const data = tmp[i].split('=')
      //   arr[data[0]] = decodeURIComponent(data[1])
      // }
      // return arr
    }
getCookie()


//  const arr = getCookie()
//  let value = arr.smartphone
//  console.log(value)
  // if (value !== undefined) {
  //   value = value.slice(-2)
  //   return value
  // }

  return false
// }
}

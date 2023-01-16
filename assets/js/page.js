document.getElementById('tier-picker-common').addEventListener('click', () => {
      var els = document.getElementsByClassName('tier-option')
      Array.from(els).forEach(element => {
            element.classList.remove('tier-active');
      });
      document.getElementById('tier-picker-common').classList.add('tier-active');
      desableImgs('')
      document.getElementById('common-img').src = "assets/images/nft/alltierlabel/common.png"
      document.getElementById('mint-price-0').innerHTML = 2
      setTotalPrice()
})


document.getElementById('tier-picker-rare').addEventListener('click', () => {
      var els = document.getElementsByClassName('tier-option')
      Array.from(els).forEach(element => {
            element.classList.remove('tier-active');
      });
      document.getElementById('tier-picker-rare').classList.add('tier-active');
      desableImgs('')
      document.getElementById('rare-img').src = "assets/images/nft/alltierlabel/rare.svg"
      document.getElementById('mint-price-0').innerHTML = 4
      setTotalPrice()
})


document.getElementById('tier-picker-epic').addEventListener('click', () => {
      var els = document.getElementsByClassName('tier-option')
      console.info(els)
      Array.from(els).forEach(element => {
            element.classList.remove('tier-active');
      });
      document.getElementById('tier-picker-epic').classList.add('tier-active');
      desableImgs('')
      document.getElementById('epic-img').src = "assets/images/nft/alltierlabel/epic.svg"
      document.getElementById('mint-price-0').innerHTML = 8
      setTotalPrice()
})


document.getElementById('tier-picker-leg').addEventListener('click', () => {
      var els = document.getElementsByClassName('tier-option')
      Array.from(els).forEach(element => {
            element.classList.remove('tier-active');
      });
      document.getElementById('tier-picker-leg').classList.add('tier-active');
      desableImgs('')
      document.getElementById('leg-img').src = "assets/images/nft/alltierlabel/leg.svg"
      document.getElementById('mint-price-0').innerHTML = 12
      setTotalPrice()
})



function desableImgs() {
      document.getElementById('common-img').src = "assets/images/nft/alltierlabel/common-dis.svg"
      document.getElementById('rare-img').src = "assets/images/nft/alltierlabel/rare-dis.svg"
      document.getElementById('epic-img').src = "assets/images/nft/alltierlabel/epic-dis.svg"
      document.getElementById('leg-img').src = "assets/images/nft/alltierlabel/leg-dis.svg"
}


function setTotalPrice() {
      var mp = Number(document.getElementById('mint-price-0').innerHTML)
      var num = document.getElementById('input-number-selector').value
      document.getElementById('total-price-0').innerHTML = num * mp
}











document.getElementById('tier-picker-common-m').addEventListener('click', () => {
      var els = document.getElementsByClassName('tier-option')
      Array.from(els).forEach(element => {
            element.classList.remove('tier-active');
      });
      document.getElementById('tier-picker-common-m').classList.add('tier-active');
      desableImgs('-m')
      document.getElementById('common-img-m').src = "assets/images/nft/alltierlabel/common.png"
      document.getElementById('mint-price-0-m').innerHTML = 2
      setTotalPriceM()
})


document.getElementById('tier-picker-rare-m').addEventListener('click', () => {
      var els = document.getElementsByClassName('tier-option')
      Array.from(els).forEach(element => {
            element.classList.remove('tier-active');
      });
      document.getElementById('tier-picker-rare-m').classList.add('tier-active');
      desableImgs('-m')
      document.getElementById('rare-img-m').src = "assets/images/nft/alltierlabel/rare.svg"
      document.getElementById('mint-price-0-m').innerHTML = 4
      setTotalPriceM()
})


document.getElementById('tier-picker-epic-m').addEventListener('click', () => {
      var els = document.getElementsByClassName('tier-option')
      console.info(els)
      Array.from(els).forEach(element => {
            element.classList.remove('tier-active');
      });
      document.getElementById('tier-picker-epic-m').classList.add('tier-active');
      desableImgs('-m')
      document.getElementById('epic-img-m').src = "assets/images/nft/alltierlabel/epic.svg"
      document.getElementById('mint-price-0-m').innerHTML = 8
      setTotalPriceM()
})


document.getElementById('tier-picker-leg-m').addEventListener('click', () => {
      var els = document.getElementsByClassName('tier-option')
      Array.from(els).forEach(element => {
            element.classList.remove('tier-active');
      });
      document.getElementById('tier-picker-leg-m').classList.add('tier-active');
      desableImgs('-m')
      document.getElementById('leg-img-m').src = "assets/images/nft/alltierlabel/leg.svg"
      document.getElementById('mint-price-0-m').innerHTML = 12
      setTotalPriceM()
})




function desableImgs(n) {
      document.getElementById('common-img' + n).src = "assets/images/nft/alltierlabel/common-dis.svg"
      document.getElementById('rare-img' + n).src = "assets/images/nft/alltierlabel/rare-dis.svg"
      document.getElementById('epic-img' + n).src = "assets/images/nft/alltierlabel/epic-dis.svg"
      document.getElementById('leg-img' + n).src = "assets/images/nft/alltierlabel/leg-dis.svg"
}



function setTotalPriceM() {
      var mp = Number(document.getElementById('mint-price-0-m').innerHTML)
      var num = document.getElementById('quantity').value
      document.getElementById('total-price-m').innerHTML = num * mp
}


function refreshReferral(n) {
      //refresh-spin
      console.log('call for refresh the ' + n)
      document.getElementById('refresh-' + n).classList.add('refresh-spin')
      var rndInt = (Math.floor(Math.random() * 6) + 4) * 1000
      setTimeout(() => {
            document.getElementById('refresh-' + n).classList.remove('refresh-spin')
      }, rndInt);
}
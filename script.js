const rangeInput = document.getElementById("lensifre")
        const count = document.getElementById("count")
        count.innerHTML = rangeInput.value

        function countRange() {
            count.innerHTML = rangeInput.value
        }

        const newArray = [bcheck, kcheck, scheck, rcheck]

        function yarat() {
            const passw = document.getElementById("passw")
            const lensifre = rangeInput.value
            const bcheck = document.getElementById("bcheck").checked
            const kcheck = document.getElementById("kcheck").checked
            const scheck = document.getElementById("scheck").checked
            const rcheck = document.getElementById("rcheck").checked
            const strg = document.getElementById("strg")
            const d1 = document.getElementById("d1")
            const d2 = document.getElementById("d2")
            const d3 = document.getElementById("d3")
            const d4 = document.getElementById("d4")

            const herfler = 'qwertyuiopasdfghjklzxcvbnm'
            const reqemler = '0123456789'
            const simvollar = '!@#$%^&*()_-=+/,.;:?'
            let total = ''
            let password = ''
            strg.value = ''
            passw.value = ''

            passw.style.color = "#fff"
            if (bcheck) total += herfler.toUpperCase()
            if (kcheck) total += herfler
            if (scheck) total += simvollar
            if (rcheck) total += reqemler
            const checkedDiv = newArray.filter(checkbox => checkbox.checked).length

            if (checkedDiv && lensifre < 1) {
                alert("Şifrənin uzunluğunu seçin")
            }
            if (!checkedDiv && lensifre < 1) {
                alert("Şifrənin uzunluğunu və şərtlərdən ən azı birini seçin")
            }
            if (!checkedDiv && lensifre > 1) {
                alert("Şərtlərdən ən azı birini seçin")
                return
            } 
            if (checkedDiv === 1 && lensifre > 0) {
                d1.style.backgroundColor = "red"
                strg.value = 'Çox zəif'
            }

            if (checkedDiv === 2 && lensifre > 0) {
                d1.style.backgroundColor = "red"
                d2.style.backgroundColor = "orange"
                strg.value = `Zəif`
            }

            if (checkedDiv === 3 && lensifre > 0) {
                d1.style.backgroundColor = "red"
                d2.style.backgroundColor = "orange"
                d3.style.backgroundColor = "yellow"
                strg.value = `Orta`
            }

            if (checkedDiv === 4 && lensifre > 0) {
                d1.style.backgroundColor = "red"
                d2.style.backgroundColor = "orange"
                d3.style.backgroundColor = "yellow"
                d4.style.backgroundColor = "#2fff82"
                strg.value = `Güclü`
            }

            for (let i = 0; i < lensifre; i++) {
                password += total[rand(0, total.length - 1)]
            }

            passw.value = password;

            function rand(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
        }

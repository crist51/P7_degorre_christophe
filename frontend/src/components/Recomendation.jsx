function Recomendation() {
    const currentMonth = new Date().getMonth()+1;//0=janvier 1=fevrier
    //const endOfTheYear = (currentMonth === 12)//true ||false
    //const NotreMoi = (currentMonth === 5)//true ||false

   if(!currentMonth === 1){
       return <p className="recomendation">🥂 Groupomania, vous souhaite une Bonne année et Bonne santée 🥂</p>
    }else if (currentMonth === 12) {    
        return <p className="recomendation">🎄Groupomania, vous souhaite de Bonne fêtes de fin d'anné 🎄</p>
    }else {
        return <p className="recomendation">👩 Groupomania, partageons Ensemble 👨</p>
    }
}

export default Recomendation
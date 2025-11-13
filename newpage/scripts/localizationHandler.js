
//Obtiene una localizacion.
function GetLocalized(id)
{
    if(globalData == undefined)
    {
        return "";
    }

    //Recorre todas las variables localizadas.
    for(let i = 0; i < globalData.localization.length; i++)
    {
        if(globalData.localization[i].id == id)
            return globalData.localization[i].localization;
    }
}
const language = navigator.language;

//Despierta lo inicial necesario.
function awake()
{
    const awakeEvent = new CustomEvent('orchestratorAwake');
    window.dispatchEvent(awakeEvent);
}

//Inicializa lo primero.
function init()
{
    const initEvent = new CustomEvent('orchestratorInitialize');
    window.dispatchEvent(initEvent);
}

//Inicializa los constructores.
function initBuilders(data)
{
    const buildersEvent = new CustomEvent('orchestratorBuildersInitialize', {detail: {data: data}});
    window.dispatchEvent(buildersEvent);
}

//Inicializa los efectos.
function initEffects()
{
    const effectsEvent = new CustomEvent('orchestratorEffectsInitialize');
    window.dispatchEvent(effectsEvent);
}

awake();
init();
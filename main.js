import './style.css';
import { npcData, questData, resourceData, teleportData} from './data.js';
import {Map, View} from 'ol';
import ImageLayer from 'ol/layer/Image.js';
import Projection from 'ol/proj/Projection.js';
import Static from 'ol/source/ImageStatic.js';
import Overlay from 'ol/Overlay.js';
import {fromLonLat, toLonLat} from 'ol/proj.js';
import {toStringHDMS} from 'ol/coordinate.js';
import {Control, defaults as defaultControls} from 'ol/control.js';


function createFilterList() {

  const filterContainer = document.createElement('div');
  filterContainer.id = 'filtercontainer';
  filterContainer.classList.add('filter-container');
  filterContainer.classList.add('hidden');
  filterContainer.innerHTML = '<h1 class="center-text">Filter Options<h1>'

  filterContainer.append(createToggle("Show NPCs", "npc"));
  filterContainer.append(createToggle("Show Resources", "resource"));
  filterContainer.append(createToggle("Show Show Quests", "quest"));
  filterContainer.append(createToggle("Show Teleports", "teleport"));

  return filterContainer;
}

function createToggle(label, type) {

  const toggleLabel = document.createElement('label');
  toggleLabel.innerText = `${label}`;
  toggleLabel.id = `label${type}`;
  toggleLabel.classList.add('switch');

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.name = 'settings';
  input.value = `${type}`;
  input.checked = true;

  const span = document.createElement('span');
  span.classList.add('slider');
  span.classList.add('round');

  toggleLabel.appendChild(input);
  toggleLabel.appendChild(span);

  return toggleLabel;
}

class FilterLayersControl extends Control {

  constructor(opt_options) {
    const options = opt_options || {};

    const button = document.createElement('button');
    button.className = 'filter ol-unselectable ol-control';
    const element = document.createElement('div');

    element.appendChild(button);
    element.appendChild(createFilterList());

    super({
      element: element,
      target: options.target,
    });

    button.addEventListener('click', this.handleFilterClick.bind(this));
  }

  handleFilterClick() {
    const filterList = document.getElementById("filtercontainer");
    if (filterList.classList.contains('hidden')){
      filterList.classList.remove('hidden');
    } else {
      filterList.classList.add('hidden');
    }
  }
}

const container = document.getElementById('popup');
const content = document.getElementById('popup-content');
const closer = document.getElementById('popup-closer');

const extent = [0, 0, 6000, 5000];
const projection = new Projection({
  code: 'remote-realms-map',
  units: 'pixels',
  extent: extent,
});

closer.onclick = function () {
  popupOverlay.setPosition(undefined);
  closer.blur();
  return false;
};

const imageLayer =  new ImageLayer({
  source: new Static({
    attributions: 'Remote Realms',
    url: 'https://remoterealms.com/world_map.png',
    projection: projection,
    imageExtent: extent,
  }),
 });

 const popupOverlay = new Overlay({
  element: container,
  autoPan: {
    animation: {
      duration: 250,
    },
  },
 });

const map = new Map({
  target: 'map',
  layers: [ imageLayer ],
  overlays: [ popupOverlay ],
  controls: defaultControls().extend([new FilterLayersControl()]),
  view: new View({
    projection: projection,
    center: [ 2527, 3204 ],
    minZoom: 3,
    zoom: 4,
    maxZoom: 6,
  })
});

map.on('singleclick', function(evt) {
  const coordinate =  evt.coordinate;

  let coord1 = Math.floor(coordinate[0]);
  let coord2 = Math.floor(coordinate[1]);

  content.innerHTML = `<p>You clicked here:</p><code>${coord1}, ${coord2}<code>`;
  popupOverlay.setPosition(coordinate);
});

function createPin(data, type, index) {
  let headingDisplay;

  if (type === 'npc') {
    headingDisplay = data.level ? `${data.name} (Level ${data.level})` : `${data.name}`;
  } else {
    headingDisplay = data.name;
  }

  let pinContainer = document.createElement('div');
  pinContainer.id = type;

  let mapPinElement = document.createElement('div');
  mapPinElement.classList.add('map-pin');
  mapPinElement.classList.add(type);

  let mapPinPopup = document.createElement('div');
  mapPinPopup.id = "popup" + type + index;
  mapPinPopup.classList.add('ol-popup');
  mapPinPopup.classList.add('hidden');
  mapPinPopup.innerHTML = `
    <h1 class="popup-h1">${headingDisplay}</h1>`;

  if (data?.requirements) {
    mapPinPopup.innerHTML += `<h2 class="popup-h2">Requirements</h2>`;
    let requirementsList = document.createElement('ul');
    data.requirements.forEach(requirement => {
      requirementsList.innerHTML += `<li>${requirement}</li>`;
    });
    mapPinPopup.appendChild(requirementsList);
  }

  mapPinPopup.innerHTML += `<a href="https://remote-realms.fandom.com/wiki/${data.name}" target="_blank">Wiki</a>`;

  pinContainer.appendChild(mapPinElement);
  pinContainer.appendChild(mapPinPopup);

  mapPinElement.addEventListener('click', (event) => {
    const popupId = document.getElementById(`popup${type}${index}`);
    if (popupId.classList.contains('hidden')) {

      const allPopups = document.getElementsByClassName('ol-popup');
      for (let i = 0; i < allPopups.length; i++) {
        allPopups[i].classList.add('hidden')
      }
      popupId.classList.remove('hidden');
    } else {    
      popupId.classList.add('hidden');
    }
  });
  return pinContainer;
}

map.on('loadend', function(evt) {

  resourceData.forEach((resource, idx) => {
    const pin = createPin(resource, "resource", idx);

    var overlay = new Overlay({
      element: pin,
      position: resource.location
    });

    map.addOverlay(overlay)
  })

  npcData.forEach((npc, idx) => {
    const pin = createPin(npc, "npc", idx);

    var overlay = new Overlay({
      element: pin,
      position: npc.location
    });

    map.addOverlay(overlay)
  });

  questData.forEach((quest, idx) => {
    const pin = createPin(quest, "quest", idx);

    var overlay = new Overlay({
      element: pin,
      position: quest.location
    });

    map.addOverlay(overlay)
  });

  teleportData.forEach((teleport, idx) => {
    const pin = createPin(teleport, "teleport", idx);

    var overlay = new Overlay({
      element: pin,
      position: teleport.location
    });

    map.addOverlay(overlay)
  })
});

let checkboxes = document.querySelectorAll("input[type=checkbox][name=settings]");
let enabledSettings = [];

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    enabledSettings =
      Array.from(checkboxes)
      .filter(i => i.checked)
      .map(i => i.value);
      togglePinVisbility('npc');
      togglePinVisbility('resource');
      togglePinVisbility('quest');
      togglePinVisbility('teleport');
  });
});

function togglePinVisbility(type) {
  if (!enabledSettings.includes(type)) {
    let npcs = document.querySelectorAll(`div[id=${type}]`);
    npcs.forEach(node => {
      node.classList.add('hidden');
    })
  } else if (enabledSettings.includes(type) ){
    let npcs = document.querySelectorAll(`div[id=${type}]`);
    npcs.forEach(node => {
      node.classList.remove('hidden');
    })
  }
}

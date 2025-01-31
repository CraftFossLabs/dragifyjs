"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var traitInputAttr = {
  placeholder: 't.ex. Text här'
};
var _default = exports.default = {
  assetManager: {
    addButton: 'Lägg till bild',
    inputPlh: 'http://adress/till/bilden.jpg',
    modalTitle: 'Välj bild',
    uploadTitle: 'Dra och släpp filer här eller klicka för att ladda upp'
  },
  // Here just as a reference, GrapesJS core doesn't contain any block,
  // so this should be omitted from other local files
  blockManager: {
    labels: {
      // 'block-id': 'Block Label',
    },
    categories: {
      // 'category-id': 'Category Label',
    }
  },
  domComponents: {
    names: {
      '': 'Box',
      wrapper: 'Body',
      text: 'Text',
      comment: 'Kommentar',
      image: 'Bild',
      video: 'Video',
      label: 'Etikett',
      link: 'Länk',
      map: 'Karta',
      tfoot: 'Tabellfot',
      tbody: 'Tabellinnehåll',
      thead: 'Tabellhuvud',
      table: 'Tabell',
      row: 'Tabellrad',
      cell: 'Tabellcell'
    }
  },
  deviceManager: {
    device: 'Enhet',
    devices: {
      desktop: 'Dator',
      tablet: 'Surfplatta',
      mobileLandscape: 'Mobil liggande',
      mobilePortrait: 'Mobil stående'
    }
  },
  panels: {
    buttons: {
      titles: {
        preview: 'Förhandsgranska',
        fullscreen: 'Helskärm',
        'sw-visibility': 'Visa komponenter',
        'export-template': 'Visa kod',
        'open-sm': 'Öppna stilhanterare',
        'open-tm': 'Inställningar',
        'open-layers': 'Öppna lagerhanterare',
        'open-blocks': 'Öppna block'
      }
    }
  },
  selectorManager: {
    label: 'Klasser',
    selected: 'Markerad',
    emptyState: '- Status -',
    states: {
      hover: 'Mus över',
      active: 'Klick',
      'nth-of-type(2n)': 'Jämn/udda'
    }
  },
  styleManager: {
    empty: 'Markera ett element innan du använder stilhanteraren',
    layer: 'Lager',
    fileButton: 'Bilder',
    sectors: {
      general: 'Allmänt',
      layout: 'Layout',
      typography: 'Typografi',
      decorations: 'Dekoration',
      extra: 'Extra',
      flex: 'Flex',
      dimension: 'Dimension'
    },
    // The core library generates the name by their `property` name
    properties: {
      float: 'Justering',
      display: 'Visning',
      position: 'Position',
      top: 'Topp',
      right: 'Höger',
      left: 'Vänster',
      bottom: 'Botten',
      width: 'Bredd',
      height: 'Höjd',
      'max-width': 'Maxbredd',
      'max-height': 'Maxhöjd',
      margin: 'Marginal',
      'margin-top': 'Övre marginal',
      'margin-right': 'Höger marginal',
      'margin-left': 'Vänster marginal',
      'margin-bottom': 'Undre marginal',
      padding: 'Utfyllnad',
      'padding-top': 'Övre utfyllnad',
      'padding-left': 'Vänster utfyllnad',
      'padding-right': 'Höger utfyllnad',
      'padding-bottom': 'Nedre utfyllnad',
      'font-family': 'Typsnitt',
      'font-size': 'Teckenstorlek',
      'font-weight': 'Texttyngd',
      'letter-spacing': 'Textmellanrum',
      color: 'Färg',
      'line-height': 'Radhöjd',
      'text-align': 'Textjustering',
      'text-shadow': 'Textskugga',
      'text-shadow-h': 'Horisontell textskugga',
      'text-shadow-v': 'Vertikal textskugga',
      'text-shadow-blur': 'Textskuggans luddighet',
      'text-shadow-color': 'Textskuggans färg',
      'border-top-left': 'Vänster övre kantlinje',
      'border-top-right': 'Höger övre kantlinje',
      'border-bottom-left': 'Vänster nedre kantlinje',
      'border-bottom-right': 'Höger nedre kantlinje',
      'border-left': 'Vänster kantlinje',
      'border-top': 'Övre kantlinje',
      'border-right': 'Höger kantlinje',
      'border-bottom': 'Nedre kantlinje',
      'border-radius-top-left': 'Vänster övre hörnradie',
      'border-radius-top-right': 'Höger övre hörnradie',
      'border-radius-bottom-left': 'Vänster nedre hörnradie',
      'border-radius-bottom-right': 'Höger nedre hörnradie',
      'border-radius': 'Hörnradie',
      border: 'Kantlinje',
      'border-width': 'Kantbredd',
      'border-style': 'Kantstil',
      'border-color': 'Kantfärg',
      'box-shadow': 'Skugga',
      'box-shadow-h': 'Horisontell skugga',
      'box-shadow-v': 'Vertikal skugga',
      'box-shadow-blur': 'Skuggans luddighet',
      'box-shadow-spread': 'Skuggans spridning',
      'box-shadow-color': 'Skuggans färg',
      'box-shadow-type': 'Typ av skugga',
      background: 'Bakgrund',
      'background-image': 'Bakgrundsbild',
      'background-repeat': 'Upprepa bakgrund',
      'background-position': 'Bakgrundsplacering',
      'background-attachment': 'Bakgrundslåsning',
      'background-size': 'Bakgrundsstorlek',
      'background-color': 'Bakgrundsfärg',
      transition: 'Övergång',
      'transition-property': 'Övergångstyp',
      'transition-duration': 'Övergångens varaktighet',
      'transition-timing-function': 'Övergångens tidsfunktion',
      perspective: 'Perspektiv',
      transform: 'Transformera',
      'transform-rotate-x': 'Rotera längs X-axeln',
      'transform-rotate-y': 'Rotera längs Y-axeln',
      'transform-rotate-z': 'Rotera längs Z-axeln',
      'transform-scale-x': 'Skala längs X-axeln',
      'transform-scale-y': 'Skala längs Y-axeln',
      'transform-scale-z': 'Skala längs Z-axeln',
      'flex-direction': 'Flexriktning',
      'flex-wrap': 'Flexbrytning',
      'justify-content': 'Justera innehåll',
      'align-items': 'Elementjustering',
      'align-content': 'Innehållsjustering',
      order: 'Ordning',
      'flex-basis': 'Flexbas',
      'flex-grow': 'Flex väx',
      'flex-shrink': 'Flex krymp',
      'align-self': 'Självjustering'
    }
  },
  traitManager: {
    empty: 'Markera ett element innan du använder egenskapshanteraren',
    label: 'Komponentinställningar',
    traits: {
      // The core library generates the name by their `name` property
      labels: {
        // id: 'Id',
        // alt: 'Alt',
        title: 'Titel',
        placeholder: 'Platshållartext',
        value: 'Värde',
        required: 'Obligatorisk',
        selected: 'Markerad',
        checked: 'Ikryssad',
        type: 'Typ',
        style: 'Stil',
        class: 'Klass'
        // href: 'Href',
      },
      // In a simple trait, like text input, these are used on input attributes
      attributes: {
        id: traitInputAttr,
        alt: traitInputAttr,
        title: traitInputAttr,
        href: {
          placeholder: 't.ex. https://google.com'
        }
      },
      // In a trait like select, these are used to translate option names
      options: {
        target: {
          false: 'Detta fönster',
          _blank: 'Nytt fönster'
        }
      }
    }
  }
};
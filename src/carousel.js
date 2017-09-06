class Carousel extends HTMLElement {
    static get es() { return 'w-carousel'; }

    constructor() {
        super();
    }

    get current() {
        return this._current;
    }

    connectedCallback() {
    }
    
    set current(value) {
        var items = this.querySelectorAll('w-carousel-item');

        for(var i = 0; i < items.length; ++i)
            items[i].visible = (i === value);

        this._current = value;
    }
};

customElements.define(Carousel.es, Carousel);

class CarouselItem extends HTMLElement {
    static get es() { return 'w-carousel-item'; }

    constructor() {
        super();
    }
    
    connectedCallback() {
        this.classList.add('w-carousel-item');
        this.classList.add('w-carousel-fade');
        this.visible = false;
    }

    get visible() {
        return this._visible;
    }

    set visible(value) {
        this.style.display = value ? 'block' : 'none';
        this._visible = value;
    }
};

customElements.define(CarouselItem.es, CarouselItem);
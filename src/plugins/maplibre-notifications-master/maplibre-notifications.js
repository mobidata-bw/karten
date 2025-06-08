export class NotificationsControl {
    constructor(options = {}) {
      this.options = {
        position:    options.position    || 'topright',
        timeout:     options.timeout     || 3000,
        closable:    options.closable    !== false,
        dismissable: options.dismissable !== false,
        className:   options.className   || '',
        icons: Object.assign({
          info:    'fa fa-info-circle',
          warning: 'fa fa-exclamation-triangle',
          success: 'fa fa-check-circle',
          alert:   'fa fa-exclamation-circle',
          custom:  'fa fa-cog'
        }, options.icons),
        marginLeft:  options.marginLeft  || '',
        marginRight: options.marginRight || ''
      };
      this._notifications = [];
    }
  
    onAdd(map) {
      this._map = map;
      this._container = document.createElement('div');
      this._container.className = `leaflet-control-notifications ${this.options.className}`;
      if (this.options.marginLeft)  this._container.style.marginLeft  = this.options.marginLeft;
      if (this.options.marginRight) this._container.style.marginRight = this.options.marginRight;
      // klicks & scroll auf Container nicht an Map weitergeben
      this._container.addEventListener('wheel', e => e.stopPropagation());
      this._container.addEventListener('click', e => e.stopPropagation());
      // in den DOM einfügen (oben rechts über der Karte)
      map.getContainer().appendChild(this._container);
      return this._container;
    }
  
    onRemove() {
      this.clear();
      this._container.remove();
      this._map = null;
    }
  
    _add(type, title, message, opts = {}) {
      const o = Object.assign({}, this.options, opts);
      const container = document.createElement('div');
      container.className = `leaflet-notification ${type}`;
      // Icon
      if (o.icons[type]) {
        const iconSpan = document.createElement('div');
        iconSpan.className = 'leaflet-notification-icon';
        const i = document.createElement('i');
        i.className = o.icons[type];
        iconSpan.appendChild(i);
        container.appendChild(iconSpan);
      }
      // Content (Titel + Nachricht)
      const content = document.createElement('div');
      content.className = 'leaflet-notification-content';
      if (title) {
        const t = document.createElement('div');
        t.className = 'leaflet-notification-title';
        t.innerHTML = title;
        content.appendChild(t);
      }
      if (message) {
        const m = document.createElement('div');
        m.className = 'leaflet-notification-message';
        m.innerHTML = message;
        content.appendChild(m);
      }
      container.appendChild(content);
      // Dismissable: klick auf ganze Box entfernt
      if (o.dismissable) {
        container.classList.add('dismissable');
        container.addEventListener('click', () => this._remove(container));
      }
      // Closable: kleines ×-Button
      if (o.closable) {
        const closeBtn = document.createElement('span');
        closeBtn.className = 'leaflet-notification-close-button';
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', e => {
          e.stopPropagation();
          this._remove(container);
        });
        container.appendChild(closeBtn);
      }
      // Einblenden
      this._container.appendChild(container);
      this._notifications.push(container);
      // Animation: Fade in
      requestAnimationFrame(() => container.style.opacity = '1');
      // Auto-dismiss nach Timeout
      setTimeout(() => this._remove(container), o.timeout);
      return container;
    }
  
    _remove(container) {
      const idx = this._notifications.indexOf(container);
      if (idx !== -1) this._notifications.splice(idx, 1);
      container.style.opacity = '0';
      setTimeout(() => container.remove(), 300);
    }
  
    info(title, message, opts)    { return this._add('info',    title, message, opts); }
    warning(title, message, opts) { return this._add('warning', title, message, opts); }
    success(title, message, opts) { return this._add('success', title, message, opts); }
    alert(title, message, opts)   { return this._add('alert',   title, message, opts); }
    custom(title, message, opts)  { return this._add('custom',  title, message, opts); }
    clear()                       { this._notifications.slice().forEach(el => this._remove(el)); }
  }
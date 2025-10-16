export const thing = document.querySelector("#thing0");

const state = {
  // store x/y in pixels (initialized to center of window)
  x: (window.innerWidth || 0) * 0.5,
  y: (window.innerHeight || 0) * 0.5,
  hue: 0,
  saturation: 100,
  lightness: 50,
  opacity: 1,
  size: 0.1,
  roundedness: 0,
  rotation: 0,
};

/* Colour-related functions */
export function setColour(h, s = 100, l = 50, a = 1, element = thing) {
  state.hue = h;
  state.saturation = s;
  state.lightness = l;
  state.opacity = a;
  if (element != null) {
    element.style.backgroundColor = `hsl(${ h }, ${ s }%, ${ l }%, ${ a })`;
  }
}

/* Position-related functions */
function transform(element = thing) {
  if (element != null) {
    // state.x/state.y are stored in pixels now
    element.style.transform = `translate(${ state.x }px, ${ state.y }px) rotate(${ state.rotation }deg)`;
  }
}

export function setPosition(x, y, element = thing) {
  // x and y are fractions of the window size (0..1). Convert to pixels
  const w = window.innerWidth || 1;
  const h = window.innerHeight || 1;

  state.x = x * w;
  state.y = y * h;

  if (element != null) {
    transform(element);
  }
}

/**
 * Set position using pixel coordinates instead of normalized [0..1] values.
 * px, py are pixel offsets from the top-left of the window. The function
 * converts them to normalized values stored in state and applies the
 * transform to the provided element.
 */
export function setPositionPixels(px, py, element = thing) {
  // With pixel-based state, just store the px/py values directly.
  state.x = px;
  state.y = py;

  if (element != null) {
    transform(element);
  }
}

export function setSize(size, element = thing) {
  state.size = size;

  if (element != null) {
    element.style.width = `${ size }px`;
    element.style.height = `${ size }px`;
  }
}

export function setRotation(rotation, element = thing) {
  state.rotation = rotation;
  if (element != null) {
    transform(element);
  }
}

export function setRoundedness(roundedness, element = thing) {
  state.roundedness = roundedness;

  if (element != null) {
    element.style.borderRadius = `${ roundedness * 100 }%`;
  }
}

/**
 * Create and insert a new "thing" element into the document.
 * - className: the CSS class to give the element (default: 'thing')
 * - id: optional id to set for the element; if the id is already used a numeric
 *       suffix will be appended to keep it unique.
 * Returns the newly created HTMLElement.
 */
export function createThing(id = null, className = "thing") {
  const el = document.createElement("div");

  if (className) {
    el.className = className;
  }

  if (id) {
    // Ensure the id is unique in the document; if it's taken append -1, -2 ...
    let newId = id;
    let counter = 1;
    while (document.getElementById(newId)) {
      newId = `${id}-${counter++}`;
    }
    el.id = newId;
  }

  // Append to document body so it's visible by default. Caller can move it.
  document.body.appendChild(el);

  return el;
}

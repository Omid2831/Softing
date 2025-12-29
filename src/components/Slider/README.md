# Slider Section (Hero Banner)

This section implements the main hero/banner area of the Softing Application landing page. It features a responsive two-column layout with a left context area and a right-side slider, built using React and Tailwind CSS.

## Features

- **Responsive Layout:**
  - Stacks vertically on mobile, side-by-side on desktop.
- **Left Side:**
  - Contains the main heading, description, and call-to-action button.
- **Right Side:**
  - Contains a Swiper-based slider displaying marketing services with images and overlay text.
- **Wave Divider:**
  - Decorative wave image at the bottom for a modern look.

## Key Files

- `src/components/Slider/SliderList.jsx` — Main section layout and composition.
- `src/components/Slider/BannerContextLeft.jsx` — Left-side content (heading, text, button).
- `src/components/Slider/BannerSliderRight.jsx` — Right-side Swiper slider.
- `src/components/Slider/data/sliderData.js` — Data for the slider cards.
- `src/styles/slider-list.css` — Custom styles for the slider section.
- `src/styles/swiper.css` — Custom styles for the Swiper slider and overlay.

## Customization

- Update `sliderData.js` to change the slider content.
- Adjust Tailwind classes in the components for layout or style tweaks.
- Replace the wave image in `public/assets/` for a different divider style.

## Dependencies

- [React](https://react.dev/)
- [Swiper](https://swiperjs.com/react)
- [Tailwind CSS](https://tailwindcss.com/)

## Usage

Import and use the `SliderList` component in your main page or layout:

```jsx
import SliderList from "./components/Slider/SliderList";

function App() {
  return <SliderList />;
}
```

---

For further customization, refer to the comments in each component file.

# OpenElements

OpenElements is intended to be an opensource drop-in replacement renderer for StreamElements overlays.

It does not exist to build overlays, only to render existing overlays to help people during the migrationary period away from StreamElements.

## Technical choices

* Preact

Please note: we are using Preact since these are overlays. They are going to require as small a memory footprint as possible.

## TODO

We are far far away from a final working product, as I notice things not implements I should keep this updated.

- [x] Basic rendering
- [x] Group rendering
- [x] Static Image rendering
- [ ] Static Video rendering
- [x] Static Text rendering
- [ ] SE Widget Custom Event List
  - [ ] Listeners
  - [x] Basic implementation
- [ ] Latest subscriber rendering - Partially implemented
- [ ] SE Widget Alert Box Rendering
  - [ ] TTS Playback (any voice for now - disregard the voice in UI)
  - [x] Sound alert playback
  - [x] Image alert rendering
  - [x] Video alert rendering
  - [ ] Animations (fadeIn/fadeOut etc..)
- [ ] Server & Events
- [ ] Event Emulator

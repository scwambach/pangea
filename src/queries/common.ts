export const imageQuery = `{
  "src": asset->url,
  "height": asset -> metadata.dimensions.height,
  "width": asset -> metadata.dimensions.width,
  "blurDataURL": asset-> metadata.lqip,
  "imageFor": {
    ...,
  }
}`;

export const richTextProps = `...,
_type == 'image' => {
  "blurDataURL": asset->metadata.lqip,
  "src": asset->url,
  "height": asset->metadata.dimensions.height,
  "width": asset->metadata.dimensions.width,
  "imageFor": {
    ...,
  }
}`;

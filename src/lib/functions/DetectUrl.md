<script>
  import { Story } from 'kitbook';
  import Badge from '$lib/ui/Badge.svelte';
  import DetectUrl from '$lib/functions/DetectUrl.svelte';
</script>

# Detect URL

<Story name="text">
  <DetectUrl string="Bob McNary" let:display let:href>
    <Badge {href} target="_blank">{display}</Badge>
  </DetectUrl>
  <DetectUrl string="Google.com" let:display let:href>
    <Badge {href} target="_blank">{display}</Badge>
  </DetectUrl>
  <DetectUrl string="Source: <https://creativecommons.org/licenses/by-sa/2.5>, via Wikimedia Commons" let:display let:href>
    <Badge {href} target="_blank">{display}</Badge>
  </DetectUrl>
</Story>

<Story name="http://google.com">
  <DetectUrl string="http://google.com" let:display let:href>
    <Badge {href} target="_blank">{display}</Badge>
  </DetectUrl>
</Story>

<Story name="www.google.com">
  <DetectUrl string="www.google.com" let:display let:href>
    <Badge {href} target="_blank">{display}</Badge>
  </DetectUrl>
</Story>

<Story name="https://google.com">
  <DetectUrl string="https://google.com" let:display let:href>
    <Badge {href} target="_blank">{display}</Badge>
  </DetectUrl>
</Story>

<Story name="https://www.google.com">
  <DetectUrl string="https://www.google.com" let:display let:href>
    <Badge {href} target="_blank">{display}</Badge>
  </DetectUrl>
</Story>

<a href="http://www.google.com">Google</a>

{%- extends 'basic.tpl' -%}
{%- block header -%}
---
{% for k in nb.metadata.get("plotly") -%}
{%- if k == "permalink" -%}
permalink: {{ nb.metadata.get("plotly")[k].replace("python/", "python/next/") }}
{% elif k == "language" -%}
language: python/next
{% else -%}
{{ k }}: {{ nb.metadata.get("plotly")[k] }}
{% endif -%}
{%- endfor -%}
---
{{ super() }}
{{ '{% raw %}' }}
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.2/require.js"></script>

{%- endblock header-%}


{%- block footer %}
{{ super() }}
{{ '{% endraw %}' }}
{%- endblock footer-%}

**Blocmetrics** let's you easily track events on your website using Javascript.

Sample Implmentation--

Track click events using Jquery, by adding this snippet to your website:

<script>
  $(document).ready(function() {
    $(".event_object").on("click", function(e) {
      blocmetrics.track('NAME', 'Property_1', 'Property_2');
    });
  });    
</script>

'Property_1': Could be a link on your site.  (Add the .event_object id)
'Property_2': Could be a user property you want to track

You can see the results by going to localhost:4000 (for now!)


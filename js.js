<script>
  document.getElementById("searchIcon").addEventListener("mouseenter", function() {
    document.querySelector(".form-control").style.display = "block";
  });

  document.querySelector(".form-control").addEventListener("mouseleave", function() {
    document.querySelector(".form-control").style.display = "none";
  });
</script>
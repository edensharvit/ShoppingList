const userinput = $(this).val();

if (!pattern.test(userinput)) {
  alert('not a valid e-mail address');
}

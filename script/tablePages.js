window.onload = function() {
  var addImg = document.getElementById("addImg");
  if (addImg) {
    var stopTable = document.getElementById("stopTable");
    addImg.onclick = function() {
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      td.innerHTML = default_text;
      td.onclick = function() {
        convertToInput(this);
      }
      tr.appendChild(td);
      td = document.createElement('td');
      td.innerHTML = '0';
      convertToStopStatusSelect(td);
      tr.appendChild(td);
      td = document.createElement('td');
      var img = document.createElement('img');
      img.src = 'img/delete.png';
      td.appendChild(img);
      convertToDeleteImg(img);
      tr.appendChild(td);

      stopTable.appendChild(tr);
    }
  }

  function convertToDeleteImg(elem) {
    elem.onclick = function() {
      this.parentElement.parentElement.remove();
    }
  }

  var images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    if (images[i].src.indexOf('img/delete.png') === -1) continue;

    convertToDeleteImg(images[i]);
  }

  function convertToStopStatusSelect(elem) {
    var select = document.createElement('select');
    for (var j = 0; j < optionTexts.length; j++) {
      var option = document.createElement('option');
      option.innerHTML = optionTexts[j];
      select.appendChild(option);
    }
    select.selectedIndex = elem.innerHTML;
    elem.innerHTML = '';
    elem.appendChild(select);
  }

  var stopStatuses = document.querySelectorAll('.main > table td:nth-child(2)');
  [].forEach.call(stopStatuses, convertToStopStatusSelect);

  function convertToInput(elem) {
    if (elem.children.length > 0) {
      return;
    }
    var input = document.createElement('input');
    input.type = 'text';
    input.value = elem.innerHTML;
    input.onblur = function() {
      this.parentElement.innerHTML = this.value;
    };
    elem.innerHTML = '';
    elem.appendChild(input);
    input.focus();
    input.select();
  }

  function convertToText(elem) {
    if (elem.children.length == 0) {
      return;
    }
    elem.innerHTML = elem.children[0].value;
  }

  var stopNameTdes = document.querySelectorAll('.main > table td:first-child');
  [].forEach.call(stopNameTdes, function(item) {
    item.onclick = function () {
      // console.log(1);
      convertToInput(this);
    };
  });
}

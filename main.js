let allClosed = document.querySelectorAll('.closed');

allClosed.forEach(closed => {
      closed.addEventListener('click', function () {
            const isOpenDiv = this.nextElementSibling;
            isOpenDiv.classList.toggle('hidden');

            const arrow = this.querySelector('.arrow');
            arrow.classList.toggle('rotate-180');

            allClosed.forEach(otherClosed => {
                  if (otherClosed !== closed) {
                        const otherIsOpenDiv = otherClosed.nextElementSibling;
                        if (!otherIsOpenDiv.classList.contains('hidden')) {
                              otherIsOpenDiv.classList.add('hidden');
                              otherClosed.querySelector('.arrow').classList.remove('rotate-180');
                        }
                  }
            });
      });
});
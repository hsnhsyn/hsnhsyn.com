angular.module('gallery', []).
  factory('$gallery', [
    function() {
      return [
        // Gallery items
        // Add more items at bottom with comma seperation
        {
          title: 'Interior Design',
          img: 'https://farm2.staticflickr.com/1171/718725094_ac9b50db21_m.jpg'
        },
        {
          title: 'Interior Design 2',
          img: 'https://farm2.staticflickr.com/1171/718725094_ac9b50db21_m.jpg'
        },
        {
          title: 'Interior Design 3',
          img: 'https://farm2.staticflickr.com/1171/718725094_ac9b50db21_m.jpg'
        }
      ];
    }
  ]);

MainCtrl = function($scope, $gallery) {
  $scope.gallery = $gallery;
  $scope.activeGalleryItemIndex = 0;

  $scope.setActiveGalleryItem = function(itemIndex) {
    $scope.activeGalleryItemIndex = itemIndex;
  }
};

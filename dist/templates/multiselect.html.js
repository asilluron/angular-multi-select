angular.module('multiSelect.templates').run(['$templateCache', function($templateCache) {
    $templateCache.put('multiselect.html',
        "<span class=\"multiSelect inlineBlock\">\n<button type=\"button\" class=\"button multiSelectButton\" ng-click=\"toggleCheckboxes( $event ); refreshSelectedItems(); refreshButton();\" ng-bind-html=\"varButtonLabel\">\n</button>\n<div class=\"checkboxLayer\">\n    <form>\n        <div class=\"helperContainer\" ng-if=\"displayHelper( 'filter' ) || displayHelper( 'all' ) || displayHelper( 'none' ) || displayHelper( 'reset' )\">\n            <div class=\"line\" ng-if=\"displayHelper( 'all' ) || displayHelper( 'none' ) || displayHelper( 'reset' )\">\n                <button type=\"button\" ng-click=\"select( 'all',   $event );\"    class=\"helperButton\" ng-if=\"!isDisabled && displayHelper( 'all' )\">   &#10003;&nbsp; Select All</button>\n                <button type=\"button\" ng-click=\"select( 'none',  $event );\"   class=\"helperButton\" ng-if=\"!isDisabled && displayHelper( 'none' )\">  &times;&nbsp; Select None</button>\n                <button type=\"button\" ng-click=\"select( 'reset', $event );\"  class=\"helperButton\" ng-if=\"!isDisabled && displayHelper( 'reset' )\" style=\"float:right\">&#8630;&nbsp; Reset</button>\n            </div>\n            <div class=\"line\" style=\"position:relative\" ng-if=\"displayHelper( 'filter' )\">\n                <input placeholder=\"Search...\" type=\"text\" ng-click=\"select( 'filter', $event )\" ng-model=\"inputLabel.labelFilter\" ng-change=\"updateFilter();$scope.getFormElements();\" class=\"inputFilter\">\n                <button type=\"button\" class=\"clearButton\" ng-click=\"inputLabel.labelFilter='';updateFilter();prepareGrouping();prepareIndex();select( 'clear', $event )\">&times;</button>\n            </div>\n        </div>\n        <div class=\"checkBoxContainer\" style=\"{{setHeight();}}\">\n            <div ng-repeat=\"item in filteredModel | filter:removeGroupEndMarker\" class=\"multiSelectItem\"ng-class=\"{selected: item[ tickProperty ], horizontal: orientationH, vertical: orientationV, multiSelectGroup:item[ groupProperty ], disabled:itemIsDisabled( item )}\"ng-click=\"syncItems( item, $event, $index );\"ng-mouseleave=\"removeFocusStyle( tabIndex );\">\n                <div class=\"acol\" ng-if=\"item[ spacingProperty ] > 0\" ng-repeat=\"i in numberToArray( item[ spacingProperty ] ) track by $index\">&nbsp;</div>\n                <div class=\"acol\">\n                    <label>\n                        <input class=\"checkbox focusable\" type=\"checkbox\" ng-disabled=\"itemIsDisabled( item )\" ng-checked=\"item[ tickProperty ]\" ng-click=\"syncItems( item, $event, $index )\">\n                        <span ng-class=\"{disabled:itemIsDisabled( item )}\" ng-bind-html=\"writeLabel( item, 'itemLabel' )\"></span>\n                    </label>\n                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <span class=\"tickMark\" ng-if=\"item[ groupProperty ] !== true && item[ tickProperty ] === true\">&#10004;</span>\n            </div>\n        </div>\n    </form>\n</div>\n</span>\n");
}]);
import * as Placement from "./placements.js";

// Fonction pour vérifier si la position (i, j) est dans les limites de la grille
function isWithinGrid(i, j) {
    return i >= 0 && i < 11 && j >= 0 && j < 11;
}

// Fonction pour vérifier si la position (i, j) est dans les limites maximales de 6 par 6 par rapport aux cases non vides
function isWithinLimits(i, j) {
    if (!isWithinGrid(i, j)) {
        return false;
    }

    let minRow = Math.max(0, i - 5);
    let maxRow = Math.min(10, i + 5);
    let minCol = Math.max(0, j - 5);
    let maxCol = Math.min(10, j + 5);

    for (let row = minRow; row <= maxRow; row++) {
        for (let col = minCol; col <= maxCol; col++) {
            if (!Placement.isEmpty(row, col)) {
                let rowStart = Math.max(0, row - 5);
                let rowEnd = Math.min(10, row + 5);
                let colStart = Math.max(0, col - 5);
                let colEnd = Math.min(10, col + 5);

                if (i >= rowStart && i <= rowEnd && j >= colStart && j <= colEnd) {
                    return true;
                }
            }
        }
    }

    return false;
}

export { isWithinGrid, isWithinLimits };
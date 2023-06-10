-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(500) NOT NULL,
    `variantOrQuanty` VARCHAR(500) NULL,
    `price` DECIMAL(10, 1) NOT NULL,
    `image` VARCHAR(250) NOT NULL,
    `dishCategory_id` INTEGER NOT NULL,

    INDEX `FK1_category`(`dishCategory_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `variantes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foodVariant_id` INTEGER NOT NULL,
    `variante` VARCHAR(50) NOT NULL,
    `price` VARCHAR(50) NOT NULL,

    INDEX `FK1_foodVariant_id`(`foodVariant_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `menu` ADD CONSTRAINT `FK1_category` FOREIGN KEY (`dishCategory_id`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `variantes` ADD CONSTRAINT `FK1_foodVariant_id` FOREIGN KEY (`foodVariant_id`) REFERENCES `menu`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

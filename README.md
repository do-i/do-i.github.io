# Bulk Loader (Extract Transform Load)

Bulk Loader is a python script that parses csv file, then make a /direct call for each row.


## Requirement

Python 2.7.3

## Install

Nothing really to be installed.

## Usage

To run this script to process all the data sequentially:

    $ python main.py -s <SITE_ID> -i <INPUT_DATA_FILE>.csv -u <URL_PATTERN>


To run with specific row number to skip rows prior to the number

    $ python main.py -s <SITE_ID> -i <INPUT_DATA_FILE>.csv -u <URL_PATTERN> -j <JUMP_TO_NUMBER>


### Example usages

With Jump Number

    $ python main.py -s ninja007 -i /mnt/data/file-007.csv -u choco.chip.cookie.com -j 893


Without Jump Number

    $ python main.py -s ninja007 -i /mnt/data/file-007.csv -u choco.chip.cookie.com


## Output

There are two types of output files created. One high-water-mark file contains the last row number of successfully transmission. File name will be input file name with .mark surfix. The other type of file is error position. If the response header of /direct has either `X-BT-Matched-Page-Count` or `X-BT-Fired-Tag-Count` value has 0. This means tag was not fired successfully. Error file name is input file name with .err surfix.


### Example output files

  * /mnt/data/file-007.csv.mark
  * /mnt/data/file-007.csv.err

## Tip

To track progress of the processing, *.mark will give you an idea which row has just finished.


## Testing

    TBD

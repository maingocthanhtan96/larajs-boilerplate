<?php

test('globals')
    ->expect(['dd', 'ddd', 'dump', 'ray', 'die', 'var_dump', 'exit', 'phpinfo', 'print_r', 'var_export'])
    ->not->toBeUsed();

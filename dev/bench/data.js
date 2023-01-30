window.BENCHMARK_DATA = {
  "lastUpdate": 1675083010602,
  "repoUrl": "https://github.com/pytorch-labs/tensordict",
  "entries": {
    "GPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "tomcbegley@gmail.com",
            "name": "Tom Begley",
            "username": "tcbegley"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6cd49f29ff6528370a7860194521affc435654a",
          "message": "[Feature] More arguments for MemmapTensor construction (#189)",
          "timestamp": "2023-01-27T16:55:56Z",
          "tree_id": "d3c5d9161ce4b9083de7554c489fc0a477ab94f1",
          "url": "https://github.com/pytorch-labs/tensordict/commit/f6cd49f29ff6528370a7860194521affc435654a"
        },
        "date": 1674838992636,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1073.2244978673853,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 931.7714998000042 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 224206.45935226642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.460174799999095 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 105648.76253292899,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.465326199995161 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 43172.93381019886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.162660299999516 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 59341.58317827698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.85158949999277 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 43173.06428374568,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.16259030000083 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 36820.93754568711,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.15846109999802 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 39094.45773392805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.57907330000262 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 5726.0401261847655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.64076009999872 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 35471.84527987112,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.19137239999918 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 22974.342988924833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.526816000007784 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 28925.128932243475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.5720153000002 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 16924.360104625644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.086428900002375 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 32519.580584171854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.750704100000807 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 23222.71337796524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.06129020000071 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 35902.37002458935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.853314399999363 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 131099.7639313281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.6277787999970315 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 35327.38573714357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.306651599996258 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7805.891824702223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.1083599999988 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 28809.97607881208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.71019890000662 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9880.189668301635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.21263190000036 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 27254.331911844012,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.69141490000811 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 17162.08565149742,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.267976299998736 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 13792.722965771127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.50199996633455 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1283.99178047512,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 778.8211850000835 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 15886.14791763017,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.94792200003485 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2678.4817295664025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 373.3458358000007 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2611.0423653248504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 382.98880679999456 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomcbegley@gmail.com",
            "name": "Tom Begley",
            "username": "tcbegley"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "79d8607a69eea1efb30824409b3a5b2ef640464c",
          "message": "[Benchmarks] Add MemmapTensor benchmarks (#197)",
          "timestamp": "2023-01-30T12:43:53Z",
          "tree_id": "130cc93c7b83b54547fd4295d5707360303c7492",
          "url": "https://github.com/pytorch-labs/tensordict/commit/79d8607a69eea1efb30824409b3a5b2ef640464c"
        },
        "date": 1675083009663,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1302.2824655486183,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 767.8825650000022 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 234837.41688974583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.258265200002143 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 113835.70418387833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.784590099998013 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 50067.69753519591,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.972957599998153 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 63768.83074441285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.681642399999872 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 45884.239679515056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.793975600002113 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 39499.397902778815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.316841599999407 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 40723.62211369624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.555772500002604 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7577.172985931136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.97534249999876 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 39219.510253664535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.4975136999974 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25988.31583512061,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.47883049999723 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 32520.18507562185,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.750132500003247 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 18259.49186909019,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.766036600000234 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2209.4569618729483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.5999000009051 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2293.052578075897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 436.0999000027732 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 37881.695585905174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.397973600001023 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 133594.8550590199,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.485318200002666 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 25726.781581371964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.86999999735963 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 35198.4238990535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.410363000000416 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 25349.968804203407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.44778029999725 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 38553.91423317987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.93770359999894 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 141564.49320144823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.063918200003627 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 37167.58694726286,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.905163400004994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8429.861513864125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.62591080000016 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 30349.57376557697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.9493919000015 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10389.641002620003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.24971640000126 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 27693.442629236168,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.10963119999724 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18681.397157555377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.52918690000479 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 14245.014248682313,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.19999998192361 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1516.740098172223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 659.3087380000497 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 17537.587346399447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.0203859999765 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2922.547152774666,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 342.1672766000029 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3042.3538195963743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 328.6928671999988 usec\nrounds: 1"
          }
        ]
      }
    ],
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "tomcbegley@gmail.com",
            "name": "Tom Begley",
            "username": "tcbegley"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "79d8607a69eea1efb30824409b3a5b2ef640464c",
          "message": "[Benchmarks] Add MemmapTensor benchmarks (#197)",
          "timestamp": "2023-01-30T12:43:53Z",
          "tree_id": "130cc93c7b83b54547fd4295d5707360303c7492",
          "url": "https://github.com/pytorch-labs/tensordict/commit/79d8607a69eea1efb30824409b3a5b2ef640464c"
        },
        "date": 1675082874163,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 664.2991580100299,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5053458791000025 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 128736.25769407602,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.767819400004327 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 69698.81948251292,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.347445300001027 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 26744.69649392344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.39059069999939 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 33003.68264992133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.299648999999818 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 25568.999408731775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.109860499996785 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 20019.78142590897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 49.95059529999821 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 20072.564770496807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 49.819243900003585 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3254.5597616552377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 307.2612191000019 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 17783.255874182916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.23267230000124 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 12148.729125212552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.31313659999842 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 15361.554359246338,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.09757910000076 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 9097.194648688803,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.92399729999534 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 997.6446607232353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0023608999972566 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 639.3710634734517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5640369999971426 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 16131.35173829865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 61.99108519999754 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 84720.78731094727,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.803478600000972 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 15202.027341471981,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.78070000387015 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 21203.986212852524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.160943700004054 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 14087.647357424717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.98417320000294 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 23330.614671244664,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.862136899998404 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 83520.1365587454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.973160500002678 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 21418.739339866075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.688088600001265 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 4236.148471646021,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.06349180000166 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 16629.242279762395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 60.13503099999866 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 5482.262100132277,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.40645589999644 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 14179.304600508245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.52532039999733 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 7647.4329966812475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.7628324999996 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 11520.604600132567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.80100000901803 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 797.2891461039493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.254250111000033 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 10054.046229283733,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.46244300004992 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 1533.2306223877042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 652.2176021000007 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1467.8294787137518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 681.2780465999992 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}
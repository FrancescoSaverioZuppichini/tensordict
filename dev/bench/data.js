window.BENCHMARK_DATA = {
  "lastUpdate": 1677237979338,
  "repoUrl": "https://github.com/pytorch-labs/tensordict",
  "entries": {
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e59d1dcb69c3f6c8ed451425ac1dbaf69a0ac586",
          "message": "Update benchmarks workflow to run after the doc",
          "timestamp": "2023-02-02T16:43:00Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/e59d1dcb69c3f6c8ed451425ac1dbaf69a0ac586"
        },
        "date": 1675356719533,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 721.108741356773,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3867534016000007 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 147600.36056996125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.775051200000348 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 77916.23379979553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.834295899997983 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 30206.03332953654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.10596889999999 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 41083.8076068635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.340489799999432 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 27330.072921224895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.589730400001486 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 22694.336127781997,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.063857800000505 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 23437.929280323326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.665885200000275 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3470.6247249933454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 288.1325637999993 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 20819.487680043265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.031921599999805 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 14968.256003722343,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.80805030000272 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 17316.863248534806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.74717890000147 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 10000.824227929548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.99175840000021 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1544.6024023502516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 647.4158000003172 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1589.7854377891897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 629.0156999995133 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 17584.362018658103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.86871089999954 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 100506.45807259831,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.949609400001691 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 12409.919497196022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.58069999776762 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 22575.142943547944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.296507999999335 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 16720.64444614212,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.80630729999916 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 27329.797753921877,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.59009879999928 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 102699.90449114867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.737107399999445 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 25161.019770193318,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.74401709999995 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5060.55298291946,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.6068629999986 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 20713.14882576766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.278511800000956 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 6509.509488540853,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.62140600000203 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 16883.942720609353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.22787210000138 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 8664.900344638956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.40813629999889 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 4926.05984162121,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 203.00200000633595 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 870.9597314659875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1481587079999827 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 11212.520133203023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.1860159999851 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 1735.9354880849467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 576.0582733999996 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1637.6067226356506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 610.6472244999992 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3f20f804dc36e58c8fc20f69ceab526f49d5df86",
          "message": "[Doc] Update doc destination",
          "timestamp": "2023-02-03T09:09:25Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/3f20f804dc36e58c8fc20f69ceab526f49d5df86"
        },
        "date": 1675415811498,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1133.1100372078097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 882.5268219000009 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 174649.50551310414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.725753400000144 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 90907.16119799546,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.000233499999013 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 39865.254959853446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.08450029999949 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50458.287395267784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.818349999999896 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 39015.434583954295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.630881999998678 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 33930.494312098155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.472013899999183 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 34528.811005642325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.961321599999224 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7119.854723066768,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.45230399999866 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 32168.646574483893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.08616949999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21381.272038197545,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.76990210000156 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 27046.653906578475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.9731502999997 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 15447.725259968931,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.73445010000205 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2012.629248533091,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 496.86250000036125 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2427.9871161325655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 411.86379999942346 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 34563.551518285945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.932212000000845 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 105938.29596406565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.439457100000936 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 18453.861655052537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.18920000010985 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 28870.55582289962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.63736569999867 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20786.43160854381,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.10830539999813 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 32105.46506578379,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.147345100001186 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 111308.07074228513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.98407450000036 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31319.652754500563,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.928834199999304 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6782.6131136694685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.43580139999892 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26208.515811434532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.15553720000082 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9117.090174620964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.68411859999776 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23846.699394434014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.934524499998815 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15394.090328796156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.95999300000221 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 18050.86734740978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.398999990075026 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1252.8936267401014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 798.1523560000028 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13620.401454524153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.41927499999201 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2607.6354662759045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 383.48918509999805 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2565.033706196062,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 389.8584247000002 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3f20f804dc36e58c8fc20f69ceab526f49d5df86",
          "message": "[Doc] Update doc destination",
          "timestamp": "2023-02-03T09:09:25Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/3f20f804dc36e58c8fc20f69ceab526f49d5df86"
        },
        "date": 1675415852909,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1128.7729348082116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 885.9177689000035 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 175702.25467802674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.691446600002337 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 90348.7406275796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.068222899996272 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 39709.48666625101,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.18289920000143 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50303.67574493156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.879262999995717 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38513.66507779963,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.964810099998203 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 33375.42564139446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.962164699998084 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 34309.90331651366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.14610369999764 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7172.405321552816,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.42324160000226 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 32214.15350739906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.042256000000634 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21342.86342838989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.85406920000332 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 27005.468050964973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.02953780000371 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 15022.167461414914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.56828999999789 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2245.0705547268603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 445.4202999966128 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2394.0031179781427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 417.71039999503046 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 35265.24416616538,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.356531299999688 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 129218.73487129823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.738815900000873 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 24497.795199559994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.81999999812069 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29411.180374931915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.00067549999903 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20869.935765822655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.91581590000078 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31849.138529369582,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.39802350000309 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 112587.04470333281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.882016600000497 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31286.1903006298,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.962984000000464 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6818.707938838336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.65535010000212 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26282.750327393213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.047768500001666 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9159.205799732954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.17977189999988 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23650.50697924676,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.28239169999597 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15343.50920285053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.17413889999943 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 16339.869279805196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 61.20000000464643 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1265.008213995576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 790.5087010000216 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13621.86978116144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.41136100001222 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2616.2590719653454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 382.22514379999666 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2567.405031677589,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 389.498340800003 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Sree Vasthav S V",
            "username": "sreevasthav",
            "email": "sreevasthav.s.v@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b8a22ecf924deda62fba65ae04e77b1a48be896e",
          "message": "[Feature] Added support to save non-tensor data in tensor class (#157)\n\nCo-authored-by: Vincent Moens <vincentmoens@gmail.com>",
          "timestamp": "2023-02-07T16:53:39Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/b8a22ecf924deda62fba65ae04e77b1a48be896e"
        },
        "date": 1675789016982,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1136.787080896188,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 879.672206699999 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 175182.94310952228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.708318300000315 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 91876.27074069004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.884203200001252 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 40017.181777167774,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.989266000000043 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 51115.53495620182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.563524099999086 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38844.143564614045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.74390649999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 33660.22279176156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.70865660000186 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 34844.578354174286,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.698869299998364 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7203.648895394828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.81853689999843 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 32419.728735440847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.84541540000032 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21321.18105612336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.901716999997234 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 27190.497103983278,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.77755489999868 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 15119.95044514859,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.13778290000027 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2011.6308472376352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 497.10909999873815 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2423.306587284668,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 412.6593000023604 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 35127.074439918004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.468069600000945 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 131035.38328798728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.631526500000519 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 25568.908207512126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.11000000016429 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29148.562360987158,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.307009299999436 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 21011.130835659947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.59382100000096 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31347.22518218345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.90075020000052 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 110365.73039885407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.060783600000377 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30981.981366055334,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.276825299999246 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6906.217590070432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.79705960000047 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26119.523183612775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.28553809999846 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9123.588815628666,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.6059916999991 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23316.64382374054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.88781899999776 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15458.104856038564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.69098309999879 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 18181.818180744827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.000000003246896 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1264.9234290556083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 790.561686999979 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13484.130136199728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.1612540000176 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2620.4184829909536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 381.6184348000007 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2587.657772618982,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 386.4498662000017 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "25a29b66cccb4781c249e9507b5514ea20f22bb2",
          "message": "[BugFix] tensorclass `__setitem__` must allow non-type stringent writing (#203)",
          "timestamp": "2023-02-07T20:58:22Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/25a29b66cccb4781c249e9507b5514ea20f22bb2"
        },
        "date": 1675803749658,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1126.633412104637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 887.600162800004 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 175450.55175340635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.6996115999993435 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 91718.84827104263,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.902884399996537 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 39092.47018118283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.580373799999734 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50155.63066494581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.93794090000165 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38381.43463600073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.05426320000106 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 33588.18999471228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.772369400001253 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 34456.99156357978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.021686300001193 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7156.008741963351,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.74270240000237 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 32475.655177182623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.79229639999994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21439.86285485701,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.64208940000094 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 26938.3750916031,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.12176389999513 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14973.7324795343,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.78361600000358 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2313.527379675019,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 432.240399999273 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2429.4789083605738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 411.61089999945943 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 34753.24299105405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.77429309999684 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 130547.95349441953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.6600204999977 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 25615.344616283488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.03909999962707 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29410.720279302685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.001207400001476 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20856.923948234158,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.94570869999575 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31650.50689900737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.59507060000237 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 111637.77222494996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.957541699999183 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30917.54556488624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.34409400000118 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6573.120539230631,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.13474239999982 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25507.482719534295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.204182200001014 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 8971.767863387617,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.4607527999965 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23355.80820716407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.81590220000453 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15193.559159771068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.8173631000011 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 17953.643682604812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.69900002910799 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1261.7943752959204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 792.5221570000076 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13592.058714659344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.57237199994415 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2631.2509972457715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 380.04736190000017 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2532.033956706287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 394.939411200005 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard",
            "email": "apbard@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "26fef98a353e7a5594ddfc680be1dd939a4c87eb",
          "message": "[Test, Bugfix] skip test_outputsize_vmap if no functorch (#204)",
          "timestamp": "2023-02-08T11:34:06Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/26fef98a353e7a5594ddfc680be1dd939a4c87eb"
        },
        "date": 1675856556584,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1126.3755689723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 887.8033469000002 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 172864.6718543367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.784872000003816 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 92242.71171664463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.840964899989558 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 39565.53106169388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.274524899987227 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 51053.61176527233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.5872528000109 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38619.38181645046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.893734000010227 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 33697.28796850122,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.675978699970074 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 34517.28816842361,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.970989700019345 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7201.486144194754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.86022689998754 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 32219.37341383693,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.037226800026474 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21262.78194861666,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.03053449998151 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 26903.896111110425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.1693377000156 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 15029.914851138285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.53397640002368 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2008.962786575737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 497.76930000007263 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2354.0522892632994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 424.79939997974725 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 34983.64026793648,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.5847897000167 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 131104.91168458152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.6274792999811325 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 24863.252096031956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.22000002805726 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29478.079721127753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.92351229999804 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 21100.494919897516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.392253300040466 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31979.936043987993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.269605999978012 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 114628.31933662463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.723847700002807 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31210.669776965755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.04032489998099 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6826.943082491448,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.47844400001304 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26069.10303986483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.35958599997866 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9159.30105901027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.17863640001997 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23402.33986751642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.73076989998117 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15554.840475342364,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.2886696000005 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 16025.64104274413,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.399999933404615 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1252.7297341065887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 798.256777000006 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13530.75681750774,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.90569599965602 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2625.8508899785743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 380.8289357999911 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2572.405298359397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 388.74123010000403 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard",
            "email": "apbard@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "128a1235d09b6128c36cc925213467a7a8c7e48e",
          "message": "[Test] MemmapTensor should be cast to tensor and viceversa (#206)",
          "timestamp": "2023-02-08T16:15:33Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/128a1235d09b6128c36cc925213467a7a8c7e48e"
        },
        "date": 1675873411112,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1067.5352145698164,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 936.737248899999 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 177406.6525224103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.636767199999326 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 92995.32866793966,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.753228300001183 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 36085.98319805065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.711590799998476 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 51260.40913731307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.508232900000166 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38199.544680528954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.178322499998785 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 31814.98927077715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.4317251999995 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 33408.538961303624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.9324673000001 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6334.253304658787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.8718046000006 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 29988.354232551494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.34627810000086 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 19680.89917525375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.810686599999144 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 24159.319580016858,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.39189419999809 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14526.150759556913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.84136179999985 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1722.5433904371207,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 580.5369000000837 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2009.864818499049,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 497.5459000007732 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 33123.685248476206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.189877499998374 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 126342.80768362748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.914973699999449 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 22177.620562691092,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.09050000081061 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29550.599768280805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.84026070000061 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20770.248032070518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.14579000000094 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31592.018349856113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.65356480000128 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 114823.4409895849,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.7090231000019 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31010.798400355798,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.246831800000564 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6449.390738600989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.05340590000003 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25933.15491772291,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.56067659999951 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9065.096952544407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.31321620000085 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23215.48918866262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.07469000000026 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 14430.370379150501,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.29829059999975 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 13513.513511300232,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.00000001211993 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1206.2475672398903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 829.0172160000111 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13631.078061925919,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.36176900000169 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2590.651463986404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 386.00329450000004 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2509.5092375553127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 398.48428730000194 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard",
            "email": "apbard@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "128a1235d09b6128c36cc925213467a7a8c7e48e",
          "message": "[Test] MemmapTensor should be cast to tensor and viceversa (#206)",
          "timestamp": "2023-02-08T16:15:33Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/128a1235d09b6128c36cc925213467a7a8c7e48e"
        },
        "date": 1675873618493,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 654.6734387128521,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5274791077000032 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 138973.6357841191,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.195609399997238 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 69394.52424047698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.410358899999665 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 27999.340369138492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.715127100002064 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 38681.50739946819,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.85214659999906 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 23939.105962104957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.77265440000042 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 19729.172402472726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.68636329999663 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 19773.579347270435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.57253329999867 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3372.454810757167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 296.5199109000025 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 19150.923469689256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.21680310000352 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 12900.55585747406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.51603969999792 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 15669.122878978911,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.81978160000017 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 9736.608537348144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.70516639999983 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1483.9659702774443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 673.869900003865 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1470.4370830125215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 680.0698999995802 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 16242.076798217764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 61.56848119999837 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 82378.03575520644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.139158100001168 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 16998.130205562295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.830000000398286 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 21917.869276958405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.62487289999808 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 14390.860263335522,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.48854909999795 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 22671.53522166636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.1081730999997 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 85604.94471963769,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.681568200003767 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 22725.757745622563,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.00293319999946 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 4509.630135897397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.7476755000007 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 19022.729418578972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.56869179999626 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 6016.929566365868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.19772409999882 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 13511.415884456503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.01148839999792 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 7814.615007236309,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.96535709999829 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 4214.075010878317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 237.29999998067797 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 794.2169783280157,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2591017660000148 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 10482.7756360375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.39458200003992 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 1539.303376610551,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 649.6445178999977 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1485.731147998734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 673.0692839999961 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tom Begley",
            "username": "tcbegley",
            "email": "tomcbegley@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "da8880757e31c257bdb02cc5b471ee7492e2e48e",
          "message": "[BugFix] Fix `_getitem_batch_size` in various edge cases. (#211)",
          "timestamp": "2023-02-09T10:20:22Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/da8880757e31c257bdb02cc5b471ee7492e2e48e"
        },
        "date": 1675938517258,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1124.6924358424399,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 889.1319690000046 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 174506.6361473753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.730441099990458 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 91603.7236107611,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.916586799999095 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 39370.8797980599,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.39948319999894 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50104.820035080826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.958159700001943 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38928.954374085966,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.687820699999975 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 33784.80257820534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.599107399997138 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 34572.105936774344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.92505309999933 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7208.91210063119,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.71718589999773 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 32163.550780880247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.09109459999218 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21488.7663595155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.5359426999953 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 27046.197371718517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.97377440000764 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 15224.250322251331,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.68467929999997 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2078.7172817263777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 481.0659000099804 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2368.005592240095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 422.2963000074742 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 35145.92946645797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.45279709999886 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 130716.31087404398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.6501547000020755 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 24673.2643018435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.529699992930546 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29290.580528621496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.140668499992444 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20903.975050770878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.837791500001 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31851.351729008114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.39584179999701 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 113536.95815897395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.807704699995611 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31184.32182274895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.06739610000113 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6859.181724217326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.78998490000004 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25887.286686458847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.62900010000203 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9173.237302894831,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.01276910000206 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23422.49748778617,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.693995399997675 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15522.59940058654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.42219980000345 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 16000.255998128943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.49900002330833 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1263.24011597746,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 791.6151390001005 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13610.021069402152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.47527199999604 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2629.459436991095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 380.30630399999836 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2558.5283436664863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 390.8496861000003 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b2134ae77e2ebb45e96e58ebfc6abcbbfe737fec",
          "message": "[BugFix] `__eq__` refactoring (#210)\n\nCo-authored-by: Alessandro Pietro Bardelli <apbard@users.noreply.github.com>",
          "timestamp": "2023-02-09T14:55:36Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/b2134ae77e2ebb45e96e58ebfc6abcbbfe737fec"
        },
        "date": 1675955209959,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1054.5363479913724,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 948.284050999996 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 174224.8544578629,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.739709199997378 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 91219.11316265856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.962614800001802 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 36336.4462633571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.520577900003218 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 51249.13855963084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.512523100002 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 37948.02880083896,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.351829899999757 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 31230.25798760392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.02022859999829 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 32900.421472160946,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.394747400004007 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6204.659454911089,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.16919990000156 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 29788.324967068103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.570199100000764 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 19655.371675884475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.87667720000013 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 24310.363191550397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.13472070000057 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14555.513453247788,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.70248879999963 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1898.348740329001,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 526.7736000007517 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1999.1867308491262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 500.20339999718993 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 33263.529594718384,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.062955200003216 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 126938.93349994475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.877803700000641 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 22123.74696526335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.20030000207953 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29592.296076580624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.792578899999626 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20441.431820747224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.920252199997094 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31979.983293534133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.26955979999479 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 111034.15580510147,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.006237700003794 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31531.473880069414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.71434369999702 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6445.55205083043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.14574889999722 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26269.314493780097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.067228599999225 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9055.920890169753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.42499290000478 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23668.104294144516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.25095460000148 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 14492.939405867555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.99911550000297 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 15243.670075247652,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.60099996022473 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1190.00804697723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 840.3304519999892 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13782.338776338458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.55662599999368 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2557.0060194077305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 391.0823800999992 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2512.8901255857604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 397.94815930000027 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard",
            "email": "apbard@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "741419d304e35c4d434aac4b48a080eaf6af0de6",
          "message": "[Test] use temp_path instead of tmpdir (#212)",
          "timestamp": "2023-02-09T15:21:26Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/741419d304e35c4d434aac4b48a080eaf6af0de6"
        },
        "date": 1675956590962,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 893.8526443443931,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1187526337000009 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 154388.87825761046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.477150499995332 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 87172.35290473577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.47152699999765 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 29852.294399734223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.498262699998804 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 44721.6817023171,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.360518699997556 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 33665.38931987901,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.70409729999801 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 27433.667983299278,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.45156019999831 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 28859.951067259895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.650093400000515 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 5039.002575315309,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.45197239999948 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 24827.864689924827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.27732600000036 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 16787.910072404364,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.56667599999719 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 20495.559930027855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.79105539999955 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 12589.3210122692,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.4324013999983 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1179.8882386257578,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 847.5379000003613 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1228.0974952249114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 814.26759999772 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 26916.130025205006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.152443499996934 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 108842.47120301395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.18758999999909 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 19603.922351973193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 51.01020000211065 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 25788.69780816248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.77667680000059 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 17357.380961727384,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.61237840000035 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 28434.152544963978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.168974999999136 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 105069.15488916091,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.517541100001381 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 27712.047879326048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.08538799999792 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5907.734176186241,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.26963369999726 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 23038.53272929723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.40554200000497 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 8106.480666386349,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.35809349999636 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 21456.31640740742,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.606322399998135 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 13003.083497906564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.90483570000879 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 13966.285375613454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.60100005876302 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1074.628574298972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 930.5540760000213 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 12652.940520606811,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.03301199996804 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2308.734199477629,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 433.1377775000078 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2211.924810256716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.0949334999955 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3535d18c4444953b2c9e162ba65d689b3f629693",
          "message": "[Feature] Implement torch.gather for TensorDict and tensorclass (#213)",
          "timestamp": "2023-02-10T11:08:13Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/3535d18c4444953b2c9e162ba65d689b3f629693"
        },
        "date": 1676027813964,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1132.2487702767871,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 883.1981329999962 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 171592.28615793167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.827767800002448 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 91336.96723547285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.948469499999192 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 39658.33440698149,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.215380700001333 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50701.73482576219,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.72319100000277 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38750.081254081066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.806397499997047 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 33248.73315094944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.076333900001373 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 34198.41823082206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.241118499999175 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7169.030258425181,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.4888797999954 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 32108.014030585487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.144872400000168 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21284.641928054953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.98223269999744 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 26999.900300171048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.037173799996026 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 15089.000462390999,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.27344219999713 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2225.3446280010944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 449.36859999893386 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2343.2451038923195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 426.7586000025858 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 34882.77978472526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.667440099997066 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 132464.4302538304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.549196399997982 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 25113.071603827048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.81990000170299 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29137.994054939103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.31945240000118 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20793.851354638082,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.09113919999959 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31515.22971112054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.730690500000943 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 109733.45031649436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.112991500001044 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30940.68155873548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.319908599998826 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6821.6588393976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.59191019999867 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25960.513695224676,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.520038999996586 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9074.838072423558,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.19480369999997 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23681.263100221648,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.22747730000265 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15370.652778220874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.05904559999749 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 16420.361249555743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 60.89999999403517 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1261.7823500899829,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 792.5297100000535 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13725.78632319173,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.85557099999096 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2610.009035274499,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 383.14043609999544 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2564.239260410051,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 389.9792095999999 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard",
            "email": "apbard@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "65fbae713bd81e5a7059ccad6c4f01af5c994279",
          "message": "[Test, BugFix] add regression test for PR #203 (#205)",
          "timestamp": "2023-02-10T12:22:07Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/65fbae713bd81e5a7059ccad6c4f01af5c994279"
        },
        "date": 1676032206263,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1138.8185121128809,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 878.1030422000015 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 172163.6749039009,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.808426199999417 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 91254.07195059945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.958415100000707 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 39394.49712451979,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.384255999998118 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50137.58178611357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.945118300000786 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38825.566223806985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.756224500000258 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 33361.84981928861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.97435710000218 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 34274.675411627395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.17606039999896 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7210.580896395315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.68508160000204 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 32392.40574947511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.871433500001896 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21457.19271814159,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.6044189999991 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 27184.53621358328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.78561930000228 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 15131.500486556874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.08729919999803 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2278.640344426218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 438.8581999990038 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2405.4750536497227,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 415.71830000179943 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 35232.73761715041,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.38269369999864 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 131706.8607249593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.592618900000048 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 25529.807326216975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.16990000050191 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29431.621788285698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.97706069999913 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20773.148588249922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.13906740000107 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31987.136360318273,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.26256719999958 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 111992.52087066715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.929167700000562 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31085.466761557564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.169373799999335 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6706.330066589631,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.11285160000034 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26158.69823016916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.22820200000194 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9102.193875029037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.86362340000255 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23697.863033588485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.19789770000091 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15419.33835871963,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.85362580000071 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 18621.973921058747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.700000023582106 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1265.5024893338948,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 790.1999469999907 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13473.2517957301,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.22113199999103 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2639.7506226108685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 378.8236628999982 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2555.530470269707,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 391.3081888999983 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "55d08e55b0ba66527e535e55c68f54bc781c34ab",
          "message": "[Versioning] Version 0.0.2b (#215)",
          "timestamp": "2023-02-11T10:29:22Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/55d08e55b0ba66527e535e55c68f54bc781c34ab"
        },
        "date": 1676111963632,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 927.993357904617,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0775939196999986 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 156989.80464249718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.369840400000726 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 79999.30496604007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.500108599999749 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 32094.35442364703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.158127900002338 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 44849.894265924995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.296596600000385 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 33812.81562720682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.574585299999967 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 27890.639808403488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.85432270000126 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 29072.155499703582,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.39717429999973 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 5387.011872679469,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.63166810000098 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 26374.451250529153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.91548080000098 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 16999.914113034192,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.82382659999905 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 20970.726719311973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.68551960000025 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 12731.591597960125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.54477520000103 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1643.357556970495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 608.5103000003755 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1708.0072747509148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 585.4775999978301 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 29666.658365935386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.70787460000031 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 111285.97600170715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.985858200000507 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 20675.852258625397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.365600000011 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 25434.664037820512,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.31642260000103 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 17917.987736011648,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.809838400000444 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 26699.769111611087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.45350739999935 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 100285.29059184389,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.971552099997893 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 26852.058361585987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.24109289999831 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5654.371860805839,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.85430399999973 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 21943.325336681246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.571944299999245 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 7983.3580897134525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.26057190000017 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 20421.87121713561,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.967109299999834 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 12704.248667272004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.71382449999942 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 14004.033162215575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.40799999660885 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1047.6342466967105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 954.5316059999891 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 11988.460483384406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.41354600000273 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2228.466540470856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.7390686999987 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2146.4363401728037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 465.88849679999953 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aa964bf11ff285fadc97d8d75bc8dfe18848939a",
          "message": "[BugFix] Calling zeros with an empty batch size (#218)",
          "timestamp": "2023-02-15T09:39:40Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/aa964bf11ff285fadc97d8d75bc8dfe18848939a"
        },
        "date": 1676454493946,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 733.6481664414783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3630511813999988 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 156235.58238508008,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.400590600003397 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 82637.63053582977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.101024600002575 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 31238.165518615155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.012123099997325 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 44247.25116164274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.600274000001264 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 29880.8886820122,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.46620680000001 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 23778.075549560624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.055548100000806 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 24616.976644498358,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.62237269999969 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3435.6540096800727,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 291.06539750000024 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 22464.776208122857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.51413140000113 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 15321.855860832417,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.2662451000026 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 18104.19857003569,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.23580600000173 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 10608.716020723972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.26211410000178 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1606.7486012011389,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 622.3749000014323 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1565.471705586242,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 638.78509999995 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 17795.331567378853,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.194513499997356 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 90374.7518320623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.065037299999858 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 17406.288891224714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.450500003142224 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 25152.630057848175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.7572738000008 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 15511.605582422295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.4678588999966 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 25407.968960971855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.35773070000437 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 90936.06750685124,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.996736800001372 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 26755.14185399331,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.37599320000413 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5103.678628461107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 195.9371019999992 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 21327.49544615895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.88783089999902 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 6402.876590144099,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.17980229999944 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 17442.265734132117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.33200120000106 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 9460.926601145737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.69789219999848 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 12658.0676166185,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.00100001734245 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 904.0691378917699,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1061100949999627 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 11880.472279193846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.17173799995226 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 1811.2437062414658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 552.1068184000001 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1691.6825618316207,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 591.1274505999984 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tom Begley",
            "username": "tcbegley",
            "email": "tomcbegley@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cdac04f88384bc28a760a076a77a8b475b7cac72",
          "message": "[Draft][Feature] Simple symbolic tracer for TensorDictModule and TensorDictSequential (#162)\n\nCo-authored-by: vmoens <vincentmoens@gmail.com>",
          "timestamp": "2023-02-15T12:09:17Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/cdac04f88384bc28a760a076a77a8b475b7cac72"
        },
        "date": 1676463649346,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 627.3525850546831,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5939999671999998 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 127034.52944598236,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.871875500001124 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 67229.2585820681,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.874476100004586 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 25625.163139396904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.024141800001644 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 38484.262826667866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.984647400002814 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 24525.14295583174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.77448200000049 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 19953.3956917256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.116782899999635 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 21346.23492941561,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.84666890000244 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3347.06343157342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 298.7693601999979 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 19852.133369807456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.372420000002194 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 13028.406824254287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.7553557000042 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 15438.679550240457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.77237880000075 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 9470.262512968346,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.59369380000021 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1194.0091783482335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 837.5145000002249 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1400.8301880041029,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 713.8623999992433 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 17210.77274035855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.10314359999893 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 82385.5588792643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.138049599997203 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 14666.799646035743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.18119999820738 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 21452.982578240855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.61356510000019 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 14714.27966251223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.96119300000214 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 23295.833866485846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.92613030000325 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 84955.2493976341,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.77090299999577 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 22809.263684099937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.841836100000364 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 4182.363888673826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 239.09923350000213 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 17615.24806875608,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.76899900000194 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 5604.892091957833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.4155669000029 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 14664.825994411822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.1903761000001 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 8011.910024728129,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.81418250000047 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 11764.429073417137,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.0019999916185 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 737.6961207646847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3555717209999898 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 10098.826000372117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.02141099996697 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 1530.571632663409,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 653.3506688999978 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1435.2774693402416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 696.7293929999983 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e6ff15ac5770922158f830a792b665a7abab4e01",
          "message": "[Feature] MemmapTensor.empty_like and TensorDict.memmap_like (#223)",
          "timestamp": "2023-02-17T18:00:05Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/e6ff15ac5770922158f830a792b665a7abab4e01"
        },
        "date": 1676657288600,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1059.3744002113492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 943.9533367999985 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 175250.87206148772,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.706105699999853 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 93664.04860039426,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.676455000000828 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 36211.61618023425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.615447899998458 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 51276.68852930041,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.50203940000108 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38841.02000744598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.74597679999897 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 31645.39376799973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.60017560000199 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 33231.33252741593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.092082500001993 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6240.786777187225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.23620670000014 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 30063.448125617924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.26298420000171 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 19846.20091340408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.387477399999625 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 24172.797444072457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.36881560000063 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14691.807838693438,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.06514289999939 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1897.3467124092713,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 527.0518000003221 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1983.7282704844565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 504.10130000102527 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 34068.826258447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.3523467 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 126781.17246340364,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.887606500000288 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 22919.483853340513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.63099999977749 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 28581.49505564728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.9876729000016 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20943.023114997766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.74859840000261 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 30527.76749407462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.75706290000073 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 111523.24402025373,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.966740599998957 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30949.68849896753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.310502900000415 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6474.552208282702,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.45083580000016 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25431.172948918327,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.32181979999996 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9024.72510434636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.80669920000048 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23039.000297596347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.40466110000136 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 14584.624349088605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.56535869999902 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 15527.70919632802,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.40100000304483 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1205.7757856260787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 829.3415840000193 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 14144.556661857454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.69857499999443 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2530.822660138359,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 395.1284362000024 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2478.767985166509,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 403.4262205999994 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard",
            "email": "apbard@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b7071796ca1973e9c91a80cd8a5d3c64786f318e",
          "message": "[Feature] set_item works with compatible tensorclass (#224)",
          "timestamp": "2023-02-20T13:24:02Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/b7071796ca1973e9c91a80cd8a5d3c64786f318e"
        },
        "date": 1676899947108,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1119.6729225074052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 893.1179631999953 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 172810.551231597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.786683700000594 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 90908.82644706416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.000031999998328 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 39737.29104672566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.165278599996554 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50081.68272370388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.96738020000066 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38648.264578905866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.874383000001444 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 33380.27345273435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.957813300001135 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 34223.187310020294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.21995519999996 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7039.202383810875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.0615497999961 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 32257.481488167403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.000560299997915 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21236.70886771485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.088275600003726 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 26358.78050595839,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.93802220000089 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14969.719184669924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.80152029999817 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2265.691784815867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 441.3662999979806 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2401.095860159493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 416.4764999984527 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 34750.51867668775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.776548899998033 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 131730.84690124672,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.591236400003254 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 24962.805418680564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.05960000199593 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 28921.393630336228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.57648039999981 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20801.05391118961,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.07448720000025 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31988.956797923394,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.260788100001946 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 109212.83072087826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.1564333000008 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30687.3503090196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.58671700000377 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6754.708907011924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.04486969999857 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25547.357173035536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.142992099999674 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9131.236199448742,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.51419700000429 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23353.76169385502,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.81965419999665 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15256.397009554934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.54627539999842 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 15923.820434399762,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.79900003391958 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1257.792187687964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 795.0438949999921 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13436.87213695304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.42208200001232 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2633.042955975976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 379.7887146999983 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2567.299911009294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 389.5142891999967 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard",
            "email": "apbard@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9da13615f85b6d0c254a1e5add9a5bd842e4f2bd",
          "message": "[CI] increase timeout for tests (#225)",
          "timestamp": "2023-02-20T13:51:12Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/9da13615f85b6d0c254a1e5add9a5bd842e4f2bd"
        },
        "date": 1676901569738,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1126.583806760398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 887.6392452999994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 174603.24555302472,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.727270400001316 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 93026.66448400769,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.74960610000062 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 39725.937431614904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.17247080000118 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50525.73926419354,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.79189250000104 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38562.39796847793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.931997299997533 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 33371.36723676521,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.965808499997593 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 34146.45757802615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.285614700000906 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7013.913418687234,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.5737588000004 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 32150.64154804943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.10357839999836 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21246.770297037707,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.065976900000805 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 27197.81719022454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.76765650000107 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 15084.783361151136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.29196959999888 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2245.396712192441,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 445.3556000015624 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2389.402331634031,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 418.5146999986955 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 35306.18280814216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.323650999999472 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 131957.36636955684,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.578205199999388 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 25360.49950009783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.431400000466965 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29112.076598252886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.35000579999894 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20742.145632384876,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.211020099998336 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 32010.439910480985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.239808099999774 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 111422.74443288628,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.974828300000581 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30414.673999874645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.878866300001164 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6820.1304736109205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.62476089999927 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25684.444865783556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.9340709999999 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9133.494949369448,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.48711370000126 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23295.089094479907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.927502699998854 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15326.047601063958,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.24839450000002 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 15527.46809286871,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.40199999246943 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1258.4432306952522,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 794.6325869999953 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13555.991947033226,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.7681170000144 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2646.504920324253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 377.8568452000002 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2559.2682291313627,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 390.7366913000004 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8e88cbac78cff18787621726c470207e1f4f623d",
          "message": "[BugFix] Fix infinite loop in memmap tests (#228)",
          "timestamp": "2023-02-21T09:58:35Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/8e88cbac78cff18787621726c470207e1f4f623d"
        },
        "date": 1676973998941,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1126.8071145436559,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 887.4633351999989 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 174730.01722437213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.723115099999632 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 91122.22330424565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.974271300000282 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 39785.62819217998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.134704299995292 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50292.658259136195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.883617900001127 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38493.648086140725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.97831200000087 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 33471.692143123735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.875991799997337 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 34431.190196036514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.043433999999024 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7107.344382846881,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.69952799999896 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 32378.826152866637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.88438089999954 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21164.097713105868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.249829100002216 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 26209.62511107249,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.15392230000043 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14765.014804156604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.72766660000116 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2269.277455246947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 440.6689000006736 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2419.1466750652867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 413.36889999570303 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 34904.26164175857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.649796700000252 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 131418.98798045117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.609250500001963 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 26178.07899935319,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.199900001245624 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29132.841653121468,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.32552209999926 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20997.173358423748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.625458099997786 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 32205.62077936348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.050480499999363 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 111327.74252828553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.982487000002948 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30635.39049817123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.64198640000018 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6827.544782581525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.46553509999762 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25931.1813984616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.56361129999755 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9110.378881617244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.76491899999701 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23582.175801054447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.404908200001046 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15325.443963360663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.25096450000092 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 16207.455428608642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 61.70000000338405 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1252.6287149503216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 798.3211529999608 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13656.705361069377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.22410300002957 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2637.2090395847395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 379.1887502999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2586.4115240669066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 386.63607500000126 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8e88cbac78cff18787621726c470207e1f4f623d",
          "message": "[BugFix] Fix infinite loop in memmap tests (#228)",
          "timestamp": "2023-02-21T09:58:35Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/8e88cbac78cff18787621726c470207e1f4f623d"
        },
        "date": 1676974016647,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1132.2733054809537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 883.1789950000029 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 175802.9774625246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.688185799999701 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 91764.64691547053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.897442899999987 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 40292.46154274595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.818538300002047 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50352.54181090306,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.859970600003862 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38586.669688568225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.915685600000415 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 33281.087240402754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.047095300000137 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 34310.99364551333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.145177500004138 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7167.002621108998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.52834300000063 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 31986.343417879812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.263342200003308 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21248.77662027888,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.06153289999975 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 27006.970409939877,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.027477899999894 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 15226.747581319323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.67390669999895 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2262.193164610943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 442.0488999983263 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2362.731781013354,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 423.23890000375286 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 34578.29236147654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.919878099998186 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 129810.43561406455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.703540900001827 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 23730.47871472579,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.13990000039303 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29238.530796688796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.20144490000325 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20883.160990522254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.885471000000734 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 32226.438113501248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.03042280000068 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 112944.09335147336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.853937999998607 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30763.400678847604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.50615919999973 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6835.7449863293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.28983409999705 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25858.500603893746,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.672002499998825 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9057.275999824731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.40847159999885 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23446.607999738073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.65009249999707 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15344.54120309788,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.16975559999878 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 16260.162597591994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 61.50000001525768 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1257.869396036981,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 794.9950949999902 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13607.605508447166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.48831499996322 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2633.87462972321,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 379.66879239999685 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2539.920765866194,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 393.7130690999993 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "16c4473e63eb0efc9b90b7ebe0488bbfcb72cb56",
          "message": "[Feature] Distributed capabilities (#230)",
          "timestamp": "2023-02-23T14:55:01Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/16c4473e63eb0efc9b90b7ebe0488bbfcb72cb56"
        },
        "date": 1677164606217,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1103.2422816284088,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 906.4192123999987 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 173356.8934597204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.7684467000001405 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 90571.24370260496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.04103199999713 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 38457.433426341995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.002775300003123 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 49738.553768590136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.105128199998035 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 37958.80864199117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.344346299998733 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 32513.53753969989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.75641949999976 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 33551.88257952104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.80458690000205 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6951.316612593847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.85763959999736 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 31201.96506231788,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.04926349999937 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 20340.908169560113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 49.162013399995885 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 25171.863541371833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.72689580000406 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14598.695765951632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.49926979999736 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2221.5740162967404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 450.1312999991569 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2359.986151582979,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 423.73130000328274 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 34732.42004666296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.791544000000613 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 127091.40019522257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.868352999997796 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 24107.945735885893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.48010000335489 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 28661.85935821707,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.88957179999943 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20438.899741569305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.92631270000152 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31347.41896167425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.900552999996986 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 108938.19596251975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.179516800003285 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30119.62297412854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.2009467999967 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6512.841266874454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.5428177999961 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25349.5866433024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.448375000000624 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 8800.701579960756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.62730470000315 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 22945.43758276806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.5816487000011 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 14754.215405120342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.7772401000027 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 17730.182090598064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.40099999482118 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1227.5864127077716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 814.6066049999945 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13142.171857452899,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.09092399997053 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2547.4012859132504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 392.55691889999866 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2521.344417211131,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 396.6138037999997 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b4e503636690a793c9f258f5a70b337333c2aa63",
          "message": "[BugFix] Fix sorting of keys in send and recv (#234)",
          "timestamp": "2023-02-24T10:03:47Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/b4e503636690a793c9f258f5a70b337333c2aa63"
        },
        "date": 1677233633987,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 677.0464868943208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4770034544999988 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 128250.80851231223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.797221800001353 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 70596.08026278552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.165092399997548 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 26633.670815591096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.54645789999813 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 38002.210565786656,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.314258700000437 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 27393.598087637845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.50487959999964 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 21322.848996517227,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.89804820000063 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 22361.8427104726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.71903380000413 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3507.7117467184826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 285.0861393999992 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 18885.73345424814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.95002189999991 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 13087.233183117127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.41034480000144 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 16308.580416779003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 61.31741540000348 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 9968.78930572156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.31308409999724 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1416.9612529074436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 705.7356000018444 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1676.8259964276403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 596.3648000033572 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 16177.198745362752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 61.81539929999644 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 84905.90964827497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.777743200002533 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 11169.353082145191,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.53070000075058 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 22335.57561591517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.77162430000021 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 14745.214736198932,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.81861219999996 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 26697.858379763344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.456187899999804 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 89192.02841248666,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.211764300003324 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 24837.30996921258,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.262009100001706 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 4539.61700654968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.28290019999872 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 18454.078210204225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.18856409999648 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 6000.6328519432145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.64908930000024 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 14556.836064462163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.69624659999545 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 8224.204844625736,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.59230209999805 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 9451.706504011294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.80100001789106 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 851.3571480465384,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1745951770000715 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 9723.071654076619,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.84815699992578 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 1596.9875512784304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 626.1789574999966 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1490.7010276358244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 670.8253240999966 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tom Begley",
            "username": "tcbegley",
            "email": "tomcbegley@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b51fd1190f1d37f1d3221dcb8c03f025e47cb7d1",
          "message": "[Refactor] Rename set_default -> setdefault (#235)",
          "timestamp": "2023-02-24T11:12:05Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/b51fd1190f1d37f1d3221dcb8c03f025e47cb7d1"
        },
        "date": 1677237721730,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1051.667443445766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 950.8709300000021 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 170754.76045917073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.85635209999964 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 91393.5824138937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.941687300004332 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 36358.89714666223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.50358449999908 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50244.573248182875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.902646900004584 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38596.000395283714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.909420400000727 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 30109.05925800968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.2125953000002 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 32905.62578994952,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.389940199995635 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6163.803738958891,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.23748229999728 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 29976.354711358883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.35962659999723 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 19561.55340603846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 51.12068450000038 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 24052.447979144188,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.57580969999799 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14542.588058566953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.76355129999752 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1901.8110185544037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 525.814600001695 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1960.3441972241556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 510.11450000260083 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 33175.43154933052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.142788000000564 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 125635.07272917501,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.959560799997688 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 22629.34936028235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.19040000129826 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 28813.703659153092,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.70570850000172 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20258.208040435948,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 49.36270759999957 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31406.08145288406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.840966900000467 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 111522.17316748557,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.96682669999791 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31015.859435551232,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.24156990000324 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6414.546351947592,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.89566979999745 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25362.16962648182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.42880339999988 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9015.501372063989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.920065199997 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23002.321205636676,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.473873400000684 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 14215.608327680498,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.34521330000416 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 15772.621874479395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.401000033991295 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1193.881551412908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 837.6040310000121 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13757.856768054353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.68573999999717 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2537.0320567068625,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 394.1613576999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2470.506172112744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 404.775349800002 usec\nrounds: 1"
          }
        ]
      }
    ],
    "GPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e59d1dcb69c3f6c8ed451425ac1dbaf69a0ac586",
          "message": "Update benchmarks workflow to run after the doc",
          "timestamp": "2023-02-02T16:43:00Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/e59d1dcb69c3f6c8ed451425ac1dbaf69a0ac586"
        },
        "date": 1675357491367,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1059.4152254034957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 943.9169610000022 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 211521.83551496672,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.72764430001007 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 104570.14621881528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.562958799995158 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 42081.47020604165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.763428300003397 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 58351.31078868276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.13757559999749 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 40498.64376318576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.692184900004577 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 35415.08390753962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.236556000001656 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 36759.41847246907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.203912400000263 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 5583.407194319342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.10210830000324 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 34175.00866096352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.26114840000764 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 22564.426237489213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.31754610000098 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 27761.204878262815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.02149130000498 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 16179.778672472528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 61.805542599995526 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1616.723909463145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 618.5348000030899 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1656.9055598720772,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 603.5346999965441 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 30786.34456662834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.48193360000187 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 116051.05238984001,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.616897299998527 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 20500.036902957654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.78039999312023 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 31954.931480429153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.294074300001288 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 22284.936838124137,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.87336030000506 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 35093.73756640992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.495112499990682 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 124134.88998654719,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.055752899997515 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 33658.27945088696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.71037190000061 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7606.7668894562175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.46189630000435 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 27695.701489486826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.10668609999266 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9494.347532601307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.32582639999646 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 25336.97852051485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.468005200001244 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 16623.94727814893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 60.15418499999896 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 11614.132066680648,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.10200006842206 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1257.2863278817676,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 795.3637750000553 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 15769.858967608288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.41210800007956 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2616.326610779687,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 382.2152769000013 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2557.1365778675045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 391.0624127999995 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3f20f804dc36e58c8fc20f69ceab526f49d5df86",
          "message": "[Doc] Update doc destination",
          "timestamp": "2023-02-03T09:09:25Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/3f20f804dc36e58c8fc20f69ceab526f49d5df86"
        },
        "date": 1675416005459,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1285.6947910915105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 777.7895709999996 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 232596.6802639798,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.299287499998172 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 114765.30735649106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.713434600002756 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 50232.95003130917,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.907252100000505 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 62319.261288899244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.04640330000393 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 45507.63196891619,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.97433609999848 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 39643.21644349152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.22499659999653 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 41159.395467760085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.295789299998205 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7493.917653536859,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.4415517000025 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 39324.81494921486,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.42923600000222 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 26184.145992386806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.191048900000624 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 32923.814201753645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.373151599997072 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 18084.64474933321,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.295529100004615 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2175.5271900744056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 459.65869999804454 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2221.9817544043053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 450.0487000029807 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 36654.1631252369,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.282030599997142 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 129156.79187650219,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.742527400000653 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 23707.974652547353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.1798999980183 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 35571.81019698767,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.11214820000032 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 25603.109208808888,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.05775630000221 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 38874.0291400794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.72411509999597 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 142969.89095556698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.994479700000511 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 37017.63513474029,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.014151400004494 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8435.64255665583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.54461510000647 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 29925.87110349946,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.41590280000446 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10393.605983311105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.21299880000151 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 27910.52239310105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.828781199995774 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18519.541894683636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.99701600000526 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 14925.373146685653,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.9999999445281 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1497.7699605703503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 667.659270999934 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 17431.70771152332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.36672600005477 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2900.7065574970893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 344.7435927000015 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3023.3915773132658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 330.75437779999675 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3f20f804dc36e58c8fc20f69ceab526f49d5df86",
          "message": "[Doc] Update doc destination",
          "timestamp": "2023-02-03T09:09:25Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/3f20f804dc36e58c8fc20f69ceab526f49d5df86"
        },
        "date": 1675416040926,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1280.7315712504649,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 780.8037393999996 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 228788.72294884204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.370844800001805 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 115266.2095009324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.675569399997585 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 50002.281104074355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.999087599995846 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 63038.33318175094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.863363599999047 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 45492.750680140925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.981524199998148 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 39503.15210661746,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.314435600000706 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 40760.322014531666,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.533662900000763 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7493.376922606734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.4511809999981 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 39071.58643319945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.594046499998058 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 26096.278906801235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.31963949999704 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 32196.097518104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.059664899999007 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 18016.04517991696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.50607750000154 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2188.6076406299408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 456.9115000037982 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2216.2550785481253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 451.21160000007876 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 37271.251375221145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.83033069999965 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 131991.8456493368,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.576225600001862 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 24636.549305027915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.59010000219132 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 35148.64830846356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.450596200002565 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 25085.337370205954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.86392470000055 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 38656.93828219349,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.868577400001413 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 142230.64126484576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.030833799996117 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 37164.24750333319,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.90758100000039 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8313.318589308134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.2889061999997 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 30206.24062924913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.10574170000109 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10222.884427508334,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.81975009999542 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 27596.79470184061,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.23609229999829 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18667.38022852171,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.569380799996225 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 14471.78003690964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.09999996196348 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1515.9075717560434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 659.6708260000241 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 17511.205245119858,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.10629200001449 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2903.6641858407215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 344.392442100002 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3030.15692899111,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 330.0159112000017 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Sree Vasthav S V",
            "username": "sreevasthav",
            "email": "sreevasthav.s.v@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b8a22ecf924deda62fba65ae04e77b1a48be896e",
          "message": "[Feature] Added support to save non-tensor data in tensor class (#157)\n\nCo-authored-by: Vincent Moens <vincentmoens@gmail.com>",
          "timestamp": "2023-02-07T16:53:39Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/b8a22ecf924deda62fba65ae04e77b1a48be896e"
        },
        "date": 1675789216247,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1107.5040585006734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 902.9312284000014 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 227125.1630218532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.402858700001389 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 118184.41275937755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.461352700004454 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 47432.56805881152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.082560799999328 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 61767.836112792706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.18965569999773 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 46100.584375626364,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.69169899999588 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 38517.2762193773,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.9623758000032 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 38983.79886727237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.651681699997653 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6255.777636822478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.85222909999948 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 31807.06222826429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.43955869999786 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 23449.00210192231,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.6457379999988 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 31004.829696734356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.253039599999056 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 18411.949676444005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.31255340000121 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1726.347357999945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 579.2577000022447 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1854.3339121350525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 539.2771999993329 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 33139.33346593313,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.175622000001567 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 117691.18332502157,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.496813200002862 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 15491.650775285463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.55089999803931 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 32518.908542118657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.751339599999024 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 24790.355831668927,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.33826730000101 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 38805.74060461432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.769383199997264 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 143973.29583302603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.945732500003032 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 36699.842957704175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.248072999998385 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8167.537041340645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.43593079999755 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 23689.52379350224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.21275229999719 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9762.644466550853,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.43126270000289 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 21883.536514566764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.69645309999828 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15669.84361568128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.81684620000101 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 12919.7297194805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.40099999864469 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1323.6135326601814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 755.5075370000282 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 18171.596493588986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.030938000015794 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2746.692355608641,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 364.0742648000014 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2781.5862159064636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 359.5071022000013 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "25a29b66cccb4781c249e9507b5514ea20f22bb2",
          "message": "[BugFix] tensorclass `__setitem__` must allow non-type stringent writing (#203)",
          "timestamp": "2023-02-07T20:58:22Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/25a29b66cccb4781c249e9507b5514ea20f22bb2"
        },
        "date": 1675803962016,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1288.1536151793268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 776.304928400009 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 229479.99099684056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.357678400003806 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 116746.08396846987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.565597800009073 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 50071.1636413263,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.971574999999575 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 63801.93348188999,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.673506199993883 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 45835.66568117491,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.817071600003146 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 39757.59413185507,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.152427399996213 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 40978.848980186696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.402832800001306 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7539.9818470417395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.62631399999236 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 38564.81786196783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.930370100002165 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 26031.092687678574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.415598300002785 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 32723.712601542145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.558879799991697 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 18142.258558214293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.11992880000207 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2223.3240027553047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 449.7770000057244 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2289.130453243911,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 436.84709999070037 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 37243.470698175566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.85034400000177 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 131077.91926925787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.629049999991366 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 25766.687793334462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.8098000030368 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 35443.69198706131,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.21376510000846 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 25531.910569491443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.166673299996546 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 39090.959440067294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.581362399998397 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 143865.13391778665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.950954500007356 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 37112.3153826541,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.945233399999324 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8346.939198972113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.80439490000663 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 30179.78447698411,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.13476280000032 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10489.058081032663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.33744519999345 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 27651.943767114735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.16382300000396 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18622.78261576682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.69766810000556 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 15432.336911904002,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.79900002887007 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1509.1561454109428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 662.6219580000452 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 17539.205297903234,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.01512600001024 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2900.9315006215643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 344.71686069999805 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3034.722238807744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 329.51944900000854 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard",
            "email": "apbard@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "26fef98a353e7a5594ddfc680be1dd939a4c87eb",
          "message": "[Test, Bugfix] skip test_outputsize_vmap if no functorch (#204)",
          "timestamp": "2023-02-08T11:34:06Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/26fef98a353e7a5594ddfc680be1dd939a4c87eb"
        },
        "date": 1675856722886,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1193.8393048701341,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 837.6336714000047 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 237405.5467196713,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.212201499996127 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 118548.82205622601,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.435343200000034 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 48139.59087230052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.772922700001573 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 65770.70263913753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.204338099999859 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 46172.23470803802,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.658037700001387 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 38904.38059162544,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.704046300000982 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 40352.551038038524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.781580699999495 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6284.264113486065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.12762130000146 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 38042.56356463978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.28634630000306 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 24894.628877769785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.16930739999793 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 30371.2987242328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.92582280000147 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 18263.323709664623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.754546099997015 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1838.5773235630709,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 543.898800003717 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1954.4293525515454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 511.6583000017271 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 34818.814570686875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.720104699999638 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 126773.27927586515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.888097599999356 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 22197.213362707607,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.05069999822808 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 37698.862489221654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.525999300002923 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 23385.821773533335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.760951899998645 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 41361.4684906219,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.177091300003895 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 147493.28452013995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.7799696999998105 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 38925.61306389979,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.69002570000407 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8629.138377607791,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.88642529999902 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 32224.278711237996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.032502200002906 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 11064.181451176724,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.3817426000046 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 28594.748896341574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.97145590000059 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18461.020473705987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.16818649999868 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 12953.20008631694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.20100001051833 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1435.0037776546615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 696.8622769999797 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 18241.754950209535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.81928700004346 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2979.698911144772,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 335.60437810000394 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2947.154648972983,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 339.3103244000031 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard",
            "email": "apbard@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "128a1235d09b6128c36cc925213467a7a8c7e48e",
          "message": "[Test] MemmapTensor should be cast to tensor and viceversa (#206)",
          "timestamp": "2023-02-08T16:15:33Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/128a1235d09b6128c36cc925213467a7a8c7e48e"
        },
        "date": 1675873604087,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1286.9958284494762,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 777.0032955000033 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 232618.84764440826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.298877799999445 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 116062.52274171864,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.61604570000054 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 50386.44437765727,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.846607800002403 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 63600.12717481829,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.723238999999014 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 45308.72057307192,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.07080640000072 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 39718.75877735431,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.177020399996763 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 40749.49121101618,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.540183700003126 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7502.583863623783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.28741379999656 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 39347.35455852306,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.414669200000617 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25870.175028031,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.6545510000019 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 31833.540329337746,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.4134082999999 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 17876.57990285833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.93911170000183 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2207.5659466212624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.98759999923277 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2315.416179854538,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 431.887799999231 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 37872.95802549336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.404063800003996 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 133914.67479188766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.467441500000405 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 25866.6625295187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.65979999773117 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 35327.78223887621,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.306333899996616 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 25611.461805299143,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.045018500002016 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 39291.69845348657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.45066870000028 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 141760.04968180292,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.054173599999558 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 36929.69431522723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.07848030000264 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8290.605095342802,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.61845769999877 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 30852.158713821427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.41264279999996 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10550.415047525037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.78300100000183 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 27516.234062168125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.3421824999989 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18407.179014811903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.32662979999918 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 15313.93569080651,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.29999996018887 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1502.670999203744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 665.4816660000051 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 17468.040996231826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.24740400000883 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2941.74792156117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 339.93395310000096 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3047.0125693086807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 328.1903100999955 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard",
            "email": "apbard@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "128a1235d09b6128c36cc925213467a7a8c7e48e",
          "message": "[Test] MemmapTensor should be cast to tensor and viceversa (#206)",
          "timestamp": "2023-02-08T16:15:33Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/128a1235d09b6128c36cc925213467a7a8c7e48e"
        },
        "date": 1675873847776,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 738.2500815588246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3545545404999986 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 191619.31465969223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.21868060000088 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 93879.77911329208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.651921099997708 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 35866.56091339189,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.881123100002014 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 51468.06955447105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.429522200005067 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 31299.136122560176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.949763599999415 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 24672.34234986726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.5312145000039 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 26581.913460870932,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.61956419999706 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3213.977926312198,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 311.14090479999845 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 23226.400256263358,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.05445480000003 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 16411.264502897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 60.93375680000008 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 18349.796859766826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.496516099999326 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 12028.178273714899,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.13810930000045 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1465.5450361924688,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 682.3400000030233 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1226.9184434200859,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 815.0500999988708 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 15331.049335066664,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.22710730000085 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 83047.2266407377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.041341300005115 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 14390.559791910347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.49000000417982 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 27491.874501573548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.37438399999837 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 16894.62682376332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.19041659999493 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 30494.0211028443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.793313700000226 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 111817.66206934674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.943131000000903 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 29447.91305850258,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.95826379999676 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5849.634928261769,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.9508392000032 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 24117.641203909265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.46342470000377 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 6894.516353549051,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.0428063000004 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 18045.995391237553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.413956299997835 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 10004.26870140371,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.95733119999954 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 10330.57851300011,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.79999999434585 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 992.0947774966926,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0079682130000265 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 14148.792779724985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.67740799999456 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 1904.3088635169402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 525.1248992000001 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1784.5165459324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 560.3758632999984 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tom Begley",
            "username": "tcbegley",
            "email": "tomcbegley@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "da8880757e31c257bdb02cc5b471ee7492e2e48e",
          "message": "[BugFix] Fix `_getitem_batch_size` in various edge cases. (#211)",
          "timestamp": "2023-02-09T10:20:22Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/da8880757e31c257bdb02cc5b471ee7492e2e48e"
        },
        "date": 1675938783428,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1050.6039537924505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 951.8334633999984 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 210898.06469828734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.741627199996401 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 104274.77897470832,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.59004670000354 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 42378.71022429789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.59675399999901 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 57447.865588044064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.407087099996943 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 41031.600244834866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.37145990000431 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 34374.28203940542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.091516700003694 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 35812.69028982809,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.923062800005027 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 5639.7810706244545,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.3118473000011 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 33960.499999085456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.445973999997932 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 22316.766359826765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.80935920000206 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 27067.380907360446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.94483790000049 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 16014.98723503865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.44151089999833 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1621.001172470529,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 616.902699999855 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1678.1277196120204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 595.9022000013192 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 31215.97731612456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.034877199998846 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 112502.36029955289,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.888702399997328 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 19386.98358044317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 51.58099999675869 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 31982.876214555963,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.266731400000936 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 22534.86579224128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.375680300004205 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 35322.28317855493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.31074069999886 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 120943.1202570945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.268349599995872 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 32896.26954855472,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.398583600003803 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7426.718018520262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.64897919999999 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 27964.071157351005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.76017220000267 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9378.898142642094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.62233290000245 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 24348.333650201097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.07057240000245 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 15994.324548286639,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.52217759999894 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 12422.051625586735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.50200000297991 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1254.6961048117355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 797.0057420000103 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 15630.390530923965,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.97792800004253 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2585.541828548845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 386.766127300001 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2455.680906076624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 407.2190314000011 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b2134ae77e2ebb45e96e58ebfc6abcbbfe737fec",
          "message": "[BugFix] `__eq__` refactoring (#210)\n\nCo-authored-by: Alessandro Pietro Bardelli <apbard@users.noreply.github.com>",
          "timestamp": "2023-02-09T14:55:36Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/b2134ae77e2ebb45e96e58ebfc6abcbbfe737fec"
        },
        "date": 1675955420416,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1229.1701370006413,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 813.557025099999 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 241390.13877304626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.142671300007805 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 122899.0121980599,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.136761899993417 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 50021.92761219255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.991232799998215 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 67613.81861741687,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.78987610000786 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 47522.6032114116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.04261829999814 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 40638.7491302057,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.607056599995758 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 42048.02066449539,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.78233229999296 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6435.322316570584,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.39237210000465 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 39659.865413522195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.21440730000677 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25916.31767191553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.58572860000322 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 31461.86013509531,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.784516100003653 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 18955.016319205675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.75648320000528 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1912.233456186606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 522.9486999951405 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1967.0000338374543,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 508.3883999986938 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 35807.84368094784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.92684219999728 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 132121.07316189463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.568815299998732 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 22778.680068967158,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.90069999544721 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 37549.67239637707,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.63139080000292 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 26115.82397706237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.29096109999455 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 41322.011135346795,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.200177399995937 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 144290.07106258464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.930483799999365 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 38878.73359088663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.721002399995996 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8730.502754234218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.54094089999671 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 32192.961935388576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.062690099997777 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 11101.371618758947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.07895909999206 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 28399.17685326654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.21228820000033 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18991.76711833061,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.65439460000607 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 14204.343685007509,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.401000016318 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1453.4579572178006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 688.0143969999608 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 17992.273506008787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.57941300003222 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 3017.3861852341433,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 331.41266599999426 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3000.922826382268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 333.2308285999943 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard",
            "email": "apbard@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "741419d304e35c4d434aac4b48a080eaf6af0de6",
          "message": "[Test] use temp_path instead of tmpdir (#212)",
          "timestamp": "2023-02-09T15:21:26Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/741419d304e35c4d434aac4b48a080eaf6af0de6"
        },
        "date": 1675956761361,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1236.5742357569006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 808.6857796999993 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 243773.7205538086,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.10216490000721 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 120479.58634254771,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.300161299996489 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 48844.76298588853,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.473023900001408 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 66468.46656185016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.044727999998031 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 48043.87143416042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.814309299998968 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 40084.16921953197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.947504700003265 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 41654.50042844596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.007009800004653 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6587.327068180574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.8066417 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 39116.32406191992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.564774399992984 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25924.654523258898,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.57332019999831 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 31624.01295170294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.62154030000011 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 18831.178822698443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.10342010000113 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1821.3320603143702,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 549.0487000088251 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1901.146467337974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 525.9984000076656 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 35754.7365801252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.96832239999958 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 131697.99369042975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.59313009999687 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 22799.453726220938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.86069999782194 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 36730.38889607035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.225412799998594 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 26090.995702813496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.32739890000312 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 39876.301797757944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.077551200001835 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 147385.68813921942,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.784919300002912 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 38749.697156597715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.806653299991922 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8683.301717561968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.16356710000082 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 31987.339359910107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.26236879999169 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 11145.2881496052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.72401490000266 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 28222.461384373404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.432770600004915 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 19040.77586530897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.51886830000103 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 12722.32258227255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.60200003051432 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1448.7984115825304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 690.2271510000446 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 18267.28616392233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.74266900000657 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2925.97579483778,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 341.7663268999945 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2938.070519583262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 340.3594275000046 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3535d18c4444953b2c9e162ba65d689b3f629693",
          "message": "[Feature] Implement torch.gather for TensorDict and tensorclass (#213)",
          "timestamp": "2023-02-10T11:08:13Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/3535d18c4444953b2c9e162ba65d689b3f629693"
        },
        "date": 1676028002450,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1296.9635336449219,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 771.0317013999997 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 234624.11949111553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.2621363999955975 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 113834.53792478009,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.784680099995512 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 49559.17780393976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.17789729999322 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 63706.80923607437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.696909199994023 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 45410.21558926162,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.021476600002643 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 39614.88029662714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.243039800000133 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 40429.89266592695,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.73417399999107 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7570.46801519815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.09222969999246 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 38893.59272321536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.71117579999509 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25784.721247952653,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.782657000001564 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 32263.03739501726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.99522179999212 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 17797.26716164208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.18840189999901 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2176.53387415345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 459.4461000010597 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2336.4131151653214,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 428.0065000102695 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 37789.939151235274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.462069600006544 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 132635.1912040063,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.539477199998146 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 26371.586195392938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.91960000398831 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 35042.23533746874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.5369922999962 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 25315.416802769043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.50162099999943 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 39042.22137871298,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.6132966999985 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 143226.630734599,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.9819418000065525 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 37267.340366767756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.833146399997077 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8389.549811983139,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.1959071000042 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 30556.18608246072,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.72659739999426 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10440.23768917506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.78325989999712 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 27221.02361098781,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.73631139999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18263.90266900412,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.752810399998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 17730.81080708743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.3990000728154 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1505.3958724698423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 664.2770969999674 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 17499.295697120127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.14515699992262 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2929.0674438821793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 341.40559039999516 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3059.1315331396513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 326.89016119999224 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard",
            "email": "apbard@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "65fbae713bd81e5a7059ccad6c4f01af5c994279",
          "message": "[Test, BugFix] add regression test for PR #203 (#205)",
          "timestamp": "2023-02-10T12:22:07Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/65fbae713bd81e5a7059ccad6c4f01af5c994279"
        },
        "date": 1676032421752,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1277.815009608591,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 782.5858927000013 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 226986.65702035616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.405545300005542 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 111760.68032845359,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.947690699994837 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 48441.92670652012,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.643274700000802 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 62375.40785176353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.031959299994014 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 44026.433417806235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.713627299992822 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 38425.99249716435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.024051300009887 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 39594.09668331034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.256290300001183 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7490.541863199189,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.5016902999996 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 38743.470223957665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.810801000000083 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25354.913451218767,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.440087299999504 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 31221.433851531307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.029278499999236 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 17435.08040835681,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.35562880000771 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2228.8066122620253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.6705999966034 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2344.8830548181822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 426.460500000303 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 37906.16690007341,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.38093170000957 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 131527.21736777193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.6029890999961935 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 26468.961171750583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.78010000132781 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 34726.37660617799,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.796554600000945 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 24840.858098331828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.25625829999626 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 38768.058263308005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.794430899998133 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 138031.39377751193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.244728699993175 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 36497.46553570196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.39916279999761 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8086.787539734555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.65849789999857 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 30416.336964982514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.87706869999738 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10322.109243088791,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.87942420000581 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 27389.461406233346,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.510393000003205 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18430.39596931694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.258193999999094 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 16611.295679084342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 60.200000007171184 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1479.8628491525578,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 675.7382959999632 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 17136.38409409655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.355367999979535 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2917.753995290108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 342.72937389999925 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2996.2296865836006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 333.75278420000996 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "55d08e55b0ba66527e535e55c68f54bc781c34ab",
          "message": "[Versioning] Version 0.0.2b (#215)",
          "timestamp": "2023-02-11T10:29:22Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/55d08e55b0ba66527e535e55c68f54bc781c34ab"
        },
        "date": 1676112144485,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1231.8888641586307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 811.7615388000047 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 238384.88708478914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.19489679999856 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 116826.99653185875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.559665400002814 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 48902.917092739146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.44867790000353 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 66435.96688585918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.052087699996264 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 48002.53737571776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.832232100002557 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 40615.743773535665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.620994399998608 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 42073.54431143855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.767904899995074 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6615.830007004864,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.15261409999903 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 38778.88802724731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.787227300003224 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25497.112745199258,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.22012699999868 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 31349.165836631837,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.8987753999977 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 18523.879638018432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.98437149999609 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1861.6912347880623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 537.1459999992112 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1984.4199223158312,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 503.92559999750125 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 36077.88794618226,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.7178087999971 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 131192.36317709772,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.622394899999563 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 20999.359520239326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.62049999840201 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 36806.0698155826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.169431700002633 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 26348.048845962647,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.953474500000084 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 40335.71545043312,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.791924200002313 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 147059.2019905602,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.7999825000015335 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 38243.80076498255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.148028700004033 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8573.325505429812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.64085300000124 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 31779.238225156307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.467085299999557 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 11045.29406918026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.5362948000004 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 28646.43139473066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.9083620999977 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18715.35574763914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.43205940000075 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 11428.440818357072,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.50099999588201 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1462.1170110049727,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 683.9397889999645 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 18529.061211202286,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.96927500004267 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2934.959612377358,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 340.72019110000156 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2994.268413621829,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 333.97139530000004 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aa964bf11ff285fadc97d8d75bc8dfe18848939a",
          "message": "[BugFix] Calling zeros with an empty batch size (#218)",
          "timestamp": "2023-02-15T09:39:40Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/aa964bf11ff285fadc97d8d75bc8dfe18848939a"
        },
        "date": 1676454681512,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1209.256156102614,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 826.9546488999993 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 238448.85206572243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.193771499996046 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 118557.25073325496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.434743499998376 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 49287.20644884238,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.289240800002517 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 65998.10585435925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.151950000000625 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 47899.86238704757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.87688670000034 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 40210.419193536225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.86917620000213 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 41523.6379766068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.082668300002297 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6437.480250132514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.34028239999884 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 38912.10547235446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.698943499997995 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25723.821057020425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.87447350000457 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 31289.967751401633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.959125299999872 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 18544.136212466692,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.92540199999871 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1711.1104799008372,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 584.4158000002153 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1901.049607519803,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 526.0251999970933 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 35081.29240547911,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.505221199998232 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 127285.28801637967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.8563674999998065 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 18422.822191821437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.28050000091389 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 38170.12642919654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.19849849999696 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 26379.1034871727,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.908794000003354 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 41162.173294749395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.29414970000039 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 146489.72387775776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.826417399997808 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 38383.5799343971,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.052807000002076 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8523.787607690303,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.31873740000083 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 31679.924894752636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.565731400002054 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10980.605588831415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.0696583999993 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 29118.609846813015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.3422988000043 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18700.471509013554,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.47458749999987 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 9950.14975341098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.50099996306017 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1442.209241419183,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 693.3806630000277 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 18374.137607562083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.4243229999779 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2927.495400306754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 341.58892270000365 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2971.745647723014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 336.5025538999987 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tom Begley",
            "username": "tcbegley",
            "email": "tomcbegley@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cdac04f88384bc28a760a076a77a8b475b7cac72",
          "message": "[Draft][Feature] Simple symbolic tracer for TensorDictModule and TensorDictSequential (#162)\n\nCo-authored-by: vmoens <vincentmoens@gmail.com>",
          "timestamp": "2023-02-15T12:09:17Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/cdac04f88384bc28a760a076a77a8b475b7cac72"
        },
        "date": 1676463845704,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1096.4785608573316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 912.0105359999968 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 215245.15573018393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.645865300000196 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 107073.45098472103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.339383299999326 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 42962.10092682235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.27632909999693 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 58091.19456635228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.21431290000055 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 42957.50515147914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.278819299997622 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 35827.29036218247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.91168379999931 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 36466.19800965392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.42265589999988 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 5654.212801775455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.85927910000032 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 35030.711301991985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.54638009999917 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 22895.526749828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.67665400000078 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 27769.141266298106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.01119639999979 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 16662.95724243914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 60.0133569000036 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1717.17065911365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 582.3533000011594 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1684.5401996913934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 593.6338000026353 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 33792.98586500149,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.591939699997738 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 129746.95283118916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.707310099999631 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 21861.459557271697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.74260000254071 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 34032.453054556136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.38371789999792 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 23685.422964417477,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.2200609000015 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 36740.44071231104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.217964200002598 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 133943.64487233397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.465826399999287 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 35963.2311636884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.806177799999432 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7651.170315819443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.6989595999994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 28342.50253442307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.28269949999867 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9490.31764151059,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.37055109999756 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 24948.223579455684,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.083014199996114 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 16582.68594762366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 60.30386169999815 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 11918.240868105946,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.90499999677559 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1301.6815205189114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 768.2370720000335 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 15944.617328392413,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.71708999997827 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2632.6618637282245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 379.84369119999997 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2625.891153111818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 380.8230965000007 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e6ff15ac5770922158f830a792b665a7abab4e01",
          "message": "[Feature] MemmapTensor.empty_like and TensorDict.memmap_like (#223)",
          "timestamp": "2023-02-17T18:00:05Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/e6ff15ac5770922158f830a792b665a7abab4e01"
        },
        "date": 1676657492195,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1177.9744619433936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 848.9148383999975 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 234134.74848101378,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.271044800003665 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 117899.5177544417,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.481798899998694 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 47462.330394258504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.069340499997224 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 63805.90305544103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.672531100000244 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 47103.2613002803,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.229952499999172 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 39680.62887130846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.201213499997266 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 41413.029290240636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.146989900003746 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6450.0611391942675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.0372901000003 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 38425.07306719567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.02467400000137 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25017.86713526165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.97143299999948 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 29779.647493606077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.57998110000153 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 18088.09566785011,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.284979600003226 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1833.7957554930563,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 545.3170000009777 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1925.718490381127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 519.2867000005208 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 34932.14561709485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.62692749999951 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 127598.04614732237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.837110599996322 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 21308.01373074659,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.93070000030275 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 36995.34602246615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.03042699999969 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 25616.131884062375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.037900199997466 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 41067.3030674912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.35027200000377 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 146118.55706113583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.843757699999742 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 38392.2792327893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.046903700000712 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8321.025877313105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.17748949999714 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 31970.11617687583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.279210700000704 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10907.673974476867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.67857439999807 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 28427.681482134372,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.1769805999993 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18154.70310945931,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.08214559999942 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 13262.423574634366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.40100000369421 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1436.6785729200642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 696.0499159999927 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 18056.731324621822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.381009000029735 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2985.8544776859712,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 334.91250409999793 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2881.8584143064677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 346.99831020000147 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard",
            "email": "apbard@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b7071796ca1973e9c91a80cd8a5d3c64786f318e",
          "message": "[Feature] set_item works with compatible tensorclass (#224)",
          "timestamp": "2023-02-20T13:24:02Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/b7071796ca1973e9c91a80cd8a5d3c64786f318e"
        },
        "date": 1676900237635,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 695.8857810027829,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4370174348999967 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 193954.5266243647,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.155847699995775 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 93446.36880214699,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.70132539999804 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 36694.678136332754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.251908200003072 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 51824.58371370727,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.29586170000448 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 24191.681998828306,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.336522200003856 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 19868.862250651902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.330008200000975 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 20407.05595346278,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 49.00265879999779 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 2978.9026038809307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 335.6940903999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 20576.943799096603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.598081899990575 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 13933.235843504724,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.77083709999579 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 16666.141849860956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 60.00188939999589 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 10751.98050674579,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.00612099999626 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1305.0903089969088,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 766.2304999939806 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1350.1097976866597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 740.6804999959604 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 14106.696975940113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.88831649999747 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 63566.44511196911,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.731570299999474 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 11876.470456768544,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.2000999909942 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 28668.497729349205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.881492900001376 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 15996.7671173545,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.51263099999278 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 26484.56248752783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.75784480000084 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 107110.5763102974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.336146200007533 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 26767.609463363224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.35858449999796 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5714.548691285442,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.99194670000406 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 19281.838366257514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 51.86227479999843 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 6779.038315171482,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.51354889999675 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 18422.36523479816,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.28184639999927 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 10200.479645526802,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.0346056999906 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 12300.12301336481,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.29999991979275 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 897.751373944283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.113894146000007 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 14263.59613471583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.108547000018 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 1641.5872649689238,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 609.1665190999947 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1644.9635310663964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 607.9162128000007 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard",
            "email": "apbard@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9da13615f85b6d0c254a1e5add9a5bd842e4f2bd",
          "message": "[CI] increase timeout for tests (#225)",
          "timestamp": "2023-02-20T13:51:12Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/9da13615f85b6d0c254a1e5add9a5bd842e4f2bd"
        },
        "date": 1676901758996,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1394.3134514285352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 717.198847200001 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 273138.4081081685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.661147500002926 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 137046.66385450517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.296784700002945 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 55511.720108975445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.01421389999973 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 75679.76606475924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.213571500000398 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 54202.922821066066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.449189599999727 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 45291.74899782283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.079076699998268 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 47491.829671853244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.056253399996194 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7408.399984837434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.98191269999893 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 43862.3691668358,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.79858609999792 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 29152.61901560857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.3022354000027 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 35562.87031639458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.119215099997064 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 21065.205777232895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.471646399998235 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2081.571369903199,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 480.4062999994585 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2138.369164215288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 467.6460999974097 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 40527.587485436576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.67455040000459 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 150566.66592836755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.6415763000009065 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 26253.265246920317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.09050000427305 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 41519.63060383253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.08499269999993 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 29578.308853684808,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.80855899999915 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 46923.470405258355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.31129669999723 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 168437.3077183126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.936926999999059 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 44184.279746692984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.63248389999717 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 9884.042030002725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.17318370000135 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 36555.33813983827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.355785800000376 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 12525.546054719,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.83683869999822 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 31161.280426358546,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.091107500002636 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 20298.666087973983,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 49.26432090000503 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 11402.378538241783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.70099998400838 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1667.7968770169823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 599.5934000000034 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 21409.92583001797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.70730800000911 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 3320.4038114939203,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 301.1681882000005 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3289.9468640649243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 303.95627689999856 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8e88cbac78cff18787621726c470207e1f4f623d",
          "message": "[BugFix] Fix infinite loop in memmap tests (#228)",
          "timestamp": "2023-02-21T09:58:35Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/8e88cbac78cff18787621726c470207e1f4f623d"
        },
        "date": 1676974203909,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1294.4104980228722,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 772.5524488000019 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 232170.2424520391,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.307184200001757 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 115299.1822382941,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.673088399996232 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 49882.5032600688,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.04710939999086 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 63369.00571112752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.780585299989982 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 45152.08497766841,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.14737150000019 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 39295.796225710066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.44801469999811 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 40371.75278890635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.769793999996637 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7543.073301993829,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.57195839998985 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 39093.69142089907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.57957470000929 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25896.157640514597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.61576740000601 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 31746.34366645163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.49969050000436 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 17580.33573065157,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.8817351000007 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2193.846042427627,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 455.82050000803065 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2279.8237423071987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 438.63039999223474 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 37526.11939870686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.648105799995392 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 131868.06289095106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.583337300002313 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 25926.88618605642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.56999999243271 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 34779.16368339539,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.75284780000129 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 25394.64026461826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.37838809999903 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 39243.041598494776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.482224600000336 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 142386.9242784791,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.023116799996387 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 36829.81300292325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.151916299999357 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8465.771882777206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.12271979999878 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 31155.92177333916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.096626999998534 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10455.206015411424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.64613060000511 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 27895.776758488304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.84772020000173 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18658.134888691086,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.59592510000084 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 14684.287807441407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.10000002133165 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1506.7734915429396,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 663.6697590000722 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 17533.078958751747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.03504799998882 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2940.2562015292897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 340.10641639999903 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3000.5895621384757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 333.2678392999924 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8e88cbac78cff18787621726c470207e1f4f623d",
          "message": "[BugFix] Fix infinite loop in memmap tests (#228)",
          "timestamp": "2023-02-21T09:58:35Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/8e88cbac78cff18787621726c470207e1f4f623d"
        },
        "date": 1676974265465,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 756.906807639773,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3211666084999991 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 199462.38106569316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.013476700003139 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 100535.1172633019,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.946773100000428 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 40048.77428083485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.969553199997563 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 52837.469602794285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.92596310000272 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 33168.05635571518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.149490499997 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 26179.800977698465,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.197387399998206 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 27484.607637147343,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.3840013000015 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3450.6573391809875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 289.7998560000019 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 26514.364128927868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.71540569999843 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 17528.022895931143,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.051500099998975 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 20747.094275565618,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.19952070000113 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 12664.30121413248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.96211430000335 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1477.1007289544455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 677.0019000043703 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1494.4513263818853,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 669.1419000048882 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 17163.664250908245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.26261720000048 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 90653.84594044658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.030971600001749 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 14490.611532338604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.01020000213975 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 28605.41973786624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.95841029999838 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 17043.304261478315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.67406840000058 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 32519.62912455922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.750658199997364 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 117194.07614410263,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.53285450000385 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30364.13167715183,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.93359450000253 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6409.469705370958,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.0191476 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25062.34603182665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.90049450000015 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 7341.673823281411,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.20872079999913 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 18136.523631993783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.13735819999965 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 10091.51853853874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.09311430000116 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 12531.328323876214,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.79999998042331 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1036.4894891223305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 964.795118999973 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 15082.954894465156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.30000599994901 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2006.9061312614836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 498.27940850000226 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1892.0601388908424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 528.5244266000007 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "16c4473e63eb0efc9b90b7ebe0488bbfcb72cb56",
          "message": "[Feature] Distributed capabilities (#230)",
          "timestamp": "2023-02-23T14:55:01Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/16c4473e63eb0efc9b90b7ebe0488bbfcb72cb56"
        },
        "date": 1677164817388,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1274.465930431927,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 784.6423949999917 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 230580.4137895912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.336881799997627 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 114093.35028920269,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.764752700005829 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 49313.9414871856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.278241200003322 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 63567.41085228576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.73133129999178 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 44769.86545370222,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.336453100001563 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 39141.004010900615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.54865480000217 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 40086.66721416287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.945950100004666 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7378.251013354337,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.53347509999867 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 39280.436608348646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.45796549999295 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25729.987203727153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.8651573000061 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 31396.169675465255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.851019099997306 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 17451.83800558691,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.300554800008285 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 2138.644471567068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 467.5858999917182 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 2289.083293114013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 436.8560999978399 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 37451.48656148028,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.701209800000925 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 130641.93698412736,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.654509899998629 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 23331.941194418527,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.85969999955341 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 35761.19597398958,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.963270599991574 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 25090.341223493542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.855974500005686 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 39535.68985364582,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.29360190000034 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 141662.51701735237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.059030300001723 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 37187.21346670974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.890963499999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8342.572475120627,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.867103699994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 31165.232806766155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.087037700000565 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10351.033512655737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.60871050000424 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 27428.9024060873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.4578933999951 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18437.70547497435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.23668370000314 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 14706.098604766126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.99900006626558 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1490.2778209294868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 671.015824000051 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 17227.40639863793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.04704299998775 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2905.187598760451,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 344.2118506999918 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3001.5726634914777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 333.1586845000061 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vincent Moens",
            "username": "vmoens",
            "email": "vincentmoens@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b4e503636690a793c9f258f5a70b337333c2aa63",
          "message": "[BugFix] Fix sorting of keys in send and recv (#234)",
          "timestamp": "2023-02-24T10:03:47Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/b4e503636690a793c9f258f5a70b337333c2aa63"
        },
        "date": 1677233773347,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1195.1339081727954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 836.7263226000091 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 237591.93352577806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.208897099999831 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 116599.07729087642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.57639719999952 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 48039.82732276296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.816061499999705 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 65280.62538212322,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.318480700000237 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 46932.18283153574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.307340500004557 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 39521.2807809937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.302823700008048 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 41554.744157629095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.06464099999539 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6480.716269707901,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.30393159999767 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 38769.44058705124,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.793511200004104 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25599.460191345013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.06332370000882 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 31375.263484370153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.872242299994017 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 18427.380991855163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.26707139999962 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1841.3157747999549,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 543.0898999975398 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1941.4482505126296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 515.0793999973757 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 34447.76396877199,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.029460399999607 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 124762.07093302562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.015256500004853 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 21762.35939087244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.95089999384072 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 38114.72481094971,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.23657929999581 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 26175.716327269336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.203348000001824 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 41661.98212394457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.002698600008898 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 142869.43166936812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.999397899994619 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 39298.89992278607,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.446004900004482 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8484.169609362774,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.8665733999992 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 32554.794961242304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.717441199999485 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10954.329365561287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.28810779999412 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 28595.065334128856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.97106890000623 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 18375.02512302598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.421694299992396 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 12345.526596563466,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.00100001229293 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1444.101927856373,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 692.4718960000291 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 18382.62192219109,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.399203999992096 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2980.4470335547735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 335.52013800000395 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2936.089421917603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 340.58908169999995 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tom Begley",
            "username": "tcbegley",
            "email": "tomcbegley@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b51fd1190f1d37f1d3221dcb8c03f025e47cb7d1",
          "message": "[Refactor] Rename set_default -> setdefault (#235)",
          "timestamp": "2023-02-24T11:12:05Z",
          "url": "https://github.com/pytorch-labs/tensordict/commit/b51fd1190f1d37f1d3221dcb8c03f025e47cb7d1"
        },
        "date": 1677237977460,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1125.8139251198184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 888.2462525000051 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 227595.49389123867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.393760100003874 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 113402.31286062363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.818162299996857 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 45509.6932734001,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.97334080000246 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 62622.81625866411,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.968620699993608 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 45547.981756162335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.954869600006077 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 35989.311145806714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.786027799993462 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 37059.845312957164,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.9833829999925 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6041.807810471633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.51337470000362 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 34250.793233811375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.196404100002837 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 23175.402206555817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.149197200000344 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 28240.898307961696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.409638499993434 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 17315.26039177892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.752524499994706 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 1614.3553644919823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 619.4423000010829 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 1734.3364272804276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 576.5893999978289 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 34300.78561970709,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.153851199998826 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 135233.72600382718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.394605100000717 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 21015.77654363343,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.583299999587325 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 34704.34213544497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.81483810000418 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 23335.852181884493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.85251689999541 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 37777.82092843659,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.47055800000544 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 123201.80193960636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.116764400006105 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 34653.67400625344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.85696910000206 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8057.113285834164,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.11393069999122 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 30878.572840784094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.384916399996655 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10144.91769419176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.57152419999693 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 26327.690629100696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.98282249999829 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 17128.95040251245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.38069330000053 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 13332.4445063412,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.00499998513988 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1327.822320101168,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 753.1128110000509 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 15803.867181009078,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.275652000015725 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2772.021221408037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 360.7475990000012 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2707.303935496388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 369.3711617999952 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}
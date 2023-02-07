window.BENCHMARK_DATA = {
  "lastUpdate": 1675803963255,
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
      }
    ]
  }
}
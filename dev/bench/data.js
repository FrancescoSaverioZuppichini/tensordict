window.BENCHMARK_DATA = {
  "lastUpdate": 1675357493408,
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
      }
    ]
  }
}